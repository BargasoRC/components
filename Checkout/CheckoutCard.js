import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Style from './checkoutCardStyle';
import {faUserCircle,faMapMarker, faUniversity,faKaaba,faPlus,faMinus,faImage} from '@fortawesome/free-solid-svg-icons';
import Config from 'src/config.js'

class CheckoutCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { details } = this.props
    const {index}=this.props;
    const ImageDisplay = (
      details.featured == null 
      ? <FontAwesomeIcon icon={faImage} size={100} style={[Style.image, {color: '#ccc'}]} />
      : <Image source={{ uri: Config.BACKEND_URL + details.featured[0].url }} style={Style.image} />
    )
    return (
      <View style={Style.container}>
   
        <View style={Style.details}>
          {details.price!=null || this.props.variation.price!=null ? 
          (
            <React.Fragment>
          <View style={Style.newLeft}>
          <TouchableOpacity onPress={()=>this.props.onSubtract()}>
            <FontAwesomeIcon style={{paddingRight:12}} size={23} icon={faMinus} color={'orange'}/>
          </TouchableOpacity>
             <Text style={{fontSize:20,marginTop:-4,marginRight:5,marginLeft:7}}>
                {this.props.variation?this.props.variation.quantity:details.quantity}
              </Text>
            <TouchableOpacity onPress={()=>this.props.onAdd()}>
               <FontAwesomeIcon style={{paddingRight:12}} size={23} icon={faPlus} color={'orange'}/>
            </TouchableOpacity>
          </View>
          <View style={Style.leftSide}>
            <Text style={Style.title}>
              {`${details.title} ${this.props.variation ? this.props.variation.payload_value : ''}`}
            </Text>
            <Text style={Style.tags,{fontSize:15}}>
             {`PHP `+((this.props.variation ? this.props.variation.price : details.price[0].price)*details.quantity)}
            </Text>
          </View>
          <View style={Style.rightSide}>
          {ImageDisplay}
          </View>
          </React.Fragment>
          ) 
          :
           <React.Fragment>
            <View style={Style.leftSide}>
            <Text style={Style.title}>
              {details.title}
            </Text>
            <Text>
               This Item has No Price and was removed from your Cart.
             </Text>
          </View>
          <View style={Style.rightSide}>
          {ImageDisplay}
          </View>
             
           </React.Fragment>
           }
        </View>
      </View>
    );
  }
}


export default CheckoutCard;