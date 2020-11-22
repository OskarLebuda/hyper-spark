import DecorateConfig from './Config/Config';
import DecorateHyper from './Hyper/Decorate';
import DecorateWindow from './Hyper/OnWindow';
import Middleware from './Hyper/Middleware';
import GlobalProps from './Hyper/GlobalProps';
import Store from './Store/Store';

exports.decorateConfig = DecorateConfig;
exports.decorateHyper = DecorateHyper;
exports.onWindow = DecorateWindow;
exports.middleware = Middleware;
exports.reduceUI = Store;
exports.mapHyperState = GlobalProps;
