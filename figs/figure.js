export default function Figure(colour, name, fmt="svg") {
  this.colour = colour
  this.name = name
  this.setId = (id) => {this.id=id}
  this.validate = () => {
    console.log("Validation: ", this.colour)
  }
  this.draw = (el) => {
    var path = fmt+"/"+name+"_"+colour+"."+fmt
    var r_w, r_h, r_w_e, r_h_e
    r_w = el.offsetWidth * 0.75
    r_w_e = (el.offsetWidth - r_w)/2
    r_h = el.offsetHeight * 0.75
    r_h_e = (el.offsetHeight - r_h)/2
    el.insertAdjacentHTML('afterbegin', '<img id="'+name+'_'+colour+el.j+'" src="'+path+'" alt="" style="width: '+r_w+'px;height: '+r_h+'px;margin: '+r_h_e+'px '+r_w_e+'px;cursor:pointer;" draggable="true">')
  }
}
