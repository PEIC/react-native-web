Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');
var _propTypes=require('prop-types');
var _reactDom=require('react-dom');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

RenderToTopLayer=function(_Component){_inherits(RenderToTopLayer,_Component);function RenderToTopLayer(){_classCallCheck(this,RenderToTopLayer);return _possibleConstructorReturn(this,(RenderToTopLayer.__proto__||Object.getPrototypeOf(RenderToTopLayer)).apply(this,arguments));}_createClass(RenderToTopLayer,[{key:'componentDidMount',value:function componentDidMount()








{
this.renderLayer();
}},{key:'componentDidUpdate',value:function componentDidUpdate()

{
this.renderLayer();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.unrenderLayer();
if(this.closeHandler){
clearTimeout(this.closeHandler);
}
}},{key:'getLayer',value:function getLayer()

{
return this.layer;
}},{key:'unrenderLayer',value:function unrenderLayer()

{
if(!this.layer){
return;
}

(0,_reactDom.unmountComponentAtNode)(this.layer);
document.body.removeChild(this.layer);
this.layer=null;
}},{key:'renderLayer',value:function renderLayer()

{
if(!this.layer){
this.layer=document.createElement('div');
document.body.appendChild(this.layer);
}var _props=
this.props;var _props$visible=_props.visible;var visible=_props$visible===undefined?true:_props$visible;var children=_props.children;

if(visible){
this.layer.style.display='flex';
this.showRequest();
}else{
this.closeRequest();
}
var layerElement=children;
this.layerElement=(0,_reactDom.unstable_renderSubtreeIntoContainer)(this,layerElement,this.layer);
}},{key:'closeCallback',value:function closeCallback()

{
if(this.layer){
this.layer.style.display='none';
}
this.closeHandler=null;
}},{key:'closeRequest',value:function closeRequest()

{var _this2=this;
if(this.closeHandler)
return;
this.closeHandler=setTimeout(function(){return _this2.closeCallback();},this.props.closeTimeout||0);
}},{key:'showCallback',value:function showCallback()

{
if(this.props.onShow){
this.props.onShow();
}
this.showHandler=null;
}},{key:'showRequest',value:function showRequest()

{var _this3=this;
if(this.showHandler){
return;
}
this.showHandler=setTimeout(function(){return _this3.showCallback();},this.props.showTimeout||0);
}},{key:'render',value:function render()

{
return null;
}}]);return RenderToTopLayer;}(_react.Component);RenderToTopLayer.propTypes=process.env.NODE_ENV!=="production"?{children:_propTypes.element.isRequired,closeTimeout:_propTypes.number,onShow:_propTypes.func,showTimeout:_propTypes.number,visible:_propTypes.bool}:{};exports.default=


RenderToTopLayer;