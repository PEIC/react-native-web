Object.defineProperty(exports,"__esModule",{value:true});var _propTypes=require('prop-types');



var ModalPropTypes={









animationType:(0,_propTypes.oneOf)(['none','slide','fade']),



transparent:_propTypes.bool,




hardwareAccelerated:_propTypes.bool,



visible:_propTypes.bool,




onRequestClose:_propTypes.func,



onShow:_propTypes.func,





supportedOrientations:(0,_propTypes.arrayOf)((0,_propTypes.oneOf)(['portrait','portrait-upside-down','landscape','landscape-left','landscape-right'])),





onOrientationChange:_propTypes.func};exports.default=


ModalPropTypes;