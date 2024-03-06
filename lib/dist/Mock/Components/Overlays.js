"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlays = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importStar)(require("react"));
const react_native_1 = require("react-native");
const constants_1 = require("../constants");
const LayoutComponent_1 = require("./LayoutComponent");
const LayoutStore_1 = require("../Stores/LayoutStore");
const connect_1 = require("../connect");
exports.Overlays = (0, connect_1.connect)(class extends react_1.Component {
    render() {
        const children = LayoutStore_1.LayoutStore.getOverlays();
        return (react_1.default.createElement(react_native_1.View, { testID: constants_1.VISIBLE_OVERLAY_TEST_ID }, children.map((child) => {
            return react_1.default.createElement(LayoutComponent_1.LayoutComponent, { key: child.nodeId, layoutNode: child });
        })));
    }
});