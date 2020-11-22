import { exec } from "child_process";
import afterAll from 'after-all-results';

export const getCWD = (pid, store) => {

  if (pid) {
    exec(
      `lsof -p ${pid} | awk '$4=="cwd"' | tr -s ' ' | cut -d ' ' -f9-`,
      (err, stdout) => {
        const cwd = stdout.trim();

        store.dispatch({
          type: 'SET_CWD',
          data: cwd,
        });

        setGit(cwd, store);

      },
    );
  }
}

const isGit = (dir, cb) => {
  exec(`git rev-parse --is-inside-work-tree`, { cwd: dir }, (err) => {
    cb(!err);
  });
}

const gitBranch = (repo, cb) => {
  exec(`git symbolic-ref --short HEAD || git rev-parse --short HEAD`, { cwd: repo }, (err, stdout) => {
    if (err) {
      return cb(err);
    }

    cb(null, stdout.trim());
  });
}

const gitRemote = (repo, cb) => {
  exec(`git ls-remote --get-url`, { cwd: repo }, (err, stdout) => {
    cb(null, stdout.trim().replace(/^git@(.*?):/, 'https://$1/').replace(/[A-z0-9\-]+@/, '').replace(/\.git$/, ''));
  });
}

const gitDirty = (repo, cb) => {
  exec(`git status --porcelain --ignore-submodules -uno`, { cwd: repo }, (err, stdout) => {
    if (err) {
      return cb(err);
    }

    cb(null, !stdout ? 0 : parseInt(stdout.trim().split('\n').length, 10));
  });
}

const gitAhead = (repo, cb) => {
  exec(`git rev-list --left-only --count HEAD...@'{u}' 2>/dev/null`, { cwd: repo }, (err, stdout) => {
    cb(null, parseInt(stdout, 10));
  });
}

const gitCheck = (repo, cb) => {
  const next = afterAll((err, results) => {
    if (err) {
      return cb(err);
    }

    const branch = results[0];
    const remote = results[1];
    const dirty = results[2];
    const ahead = results[3];

    cb(null, {
      branch: branch,
      remote: remote,
      dirty: dirty,
      ahead: ahead
    });
  });

  gitBranch(repo, next());
  gitRemote(repo, next());
  gitDirty(repo, next());
  gitAhead(repo, next());
}

const setGit = (repo, store) => {
  isGit(repo, (exists) => {
    if (!exists) {
      store.dispatch({
        type: 'SET_GIT',
        data: {
          branch: '',
          remote: '',
          dirty: 0,
          ahead: 0
        }
      });

      return;
    }

    gitCheck(repo, (err, result) => {
      if (err) {
        throw err;
      }

      store.dispatch({
        type: 'SET_GIT',
        data: {
          branch: result.branch,
          remote: result.remote,
          dirty: result.dirty,
          ahead: result.ahead
        }
      });
    })
  });
}

export const waitFor = (object, key, fn) =>
  key in object
    ? fn(object[key])
    : setTimeout(() => waitFor(object, key, fn), 10)
