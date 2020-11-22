export default function (config) {
  const cnf = Object.assign({}, config, {
    css: `
            ${config.css || ''}
            .terms_terms {
                margin-bottom: 30px;
                margin-right: 80px;
            }
            .spark {
                position: fixed;
                top: 50%;
                right: 20px;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                    -ms-flex-align: center;
                        align-items: center;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                    -ms-flex-pack: center;
                        justify-content: center;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                        flex-direction: column;
                -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                        transform: translateY(-50%);
                background: #212934;
                padding: 10px;
                border-radius: 40px;
                opacity: 0.5;
                -webkit-transition: opacity 0.2s ease-in-out;
                        transition: opacity 0.2s ease-in-out;
                user-select: none;
              }
              .spark:hover {
                  opacity: 1;
              }
              .spark .item {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                    -ms-flex-align: center;
                        align-items: center;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                    -ms-flex-pack: center;
                        justify-content: center;
                width: 45px;
                height: 45px;
                border-radius: 100%;
                -webkit-transition: background 0.2s ease-in-out;
                        transition: background 0.2s ease-in-out;
                cursor: pointer;
              }
              .spark .item:hover {
                background: #293340;
              }
              .spark .item a {
                display: block;
                color: #fff;
              }
              
              .footer {
                position: fixed;
                bottom: 0;
                width: 100%;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                    -ms-flex-align: center;
                        align-items: center;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                    -ms-flex-pack: justify;
                        justify-content: space-between;
                background: #212934;
                opacity: 0.5;
                -webkit-transition: opacity 0.2s ease-in-out;
                        transition: opacity 0.2s ease-in-out;
                user-select: none;
              }
              .footer:hover {
                opacity: 1;
              }
              .footer .item {
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                    -ms-flex: 1;
                        flex: 1;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                    -ms-flex-align: center;
                        align-items: center;
                padding: 10px 20px;
                color: #9599a7;
                font-size: 12px;
              }
              .footer .item .link {
                color: #9599a7;
                text-decoration: none;
              }
              .footer .item .link:hover {
                text-decoration: underline;
              }
              .footer .item .icon {
                font-size: 14px;
                margin-right: 7px;
              }
              .footer .item:nth-child(2) {
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                    -ms-flex-pack: justify;
                        justify-content: space-between;
              }
              .footer .item:nth-child(3) {
                -webkit-box-pack: end;
                -webkit-justify-content: flex-end;
                    -ms-flex-pack: end;
                        justify-content: flex-end;
              }
              .footer .git .ahead, .footer .git .dirty {
                position: relative;
                margin-left: 25px;
                padding-left: 3px;
              }
              .footer .git .ahead::before, .footer .git .dirty::before {
                content: "";
                width: 12px;
                height: 12px;
                position: absolute;
                top: 50%;
                left: -16px;
                border: 1px solid #00BFFF;
                -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                        transform: translateY(-50%);
              }
              .footer .git .ahead::after, .footer .git .dirty::after {
                content: "";
                width: 4px;
                height: 4px;
                position: absolute;
                top: 50%;
                left: -9px;
                -webkit-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
                background: #00BFFF;
                border-radius: 100%;
              }
              .footer .git .ahead {
                color: #00BFFF;
              }
              .footer .git .ahead::before {
                border-color: #00BFFF;
              }
              .footer .git .ahead::after {
                background: #00BFFF;
              }
              .footer .git .dirty {
                color: #FFB68E;
              }
              .footer .git .dirty::before {
                border-color: #FFB68E;
              }
              .footer .git .dirty::after {
                background: #FFB68E;
              }
        `
  });

  return cnf;
}
