import React from 'react';
import { Image, ScrollView } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
          style={{ height: 200 }}
          resizeMethod={"auto"}
          resizeMode={'contain'}
        />
        <Image
          source={{ uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
          style={{ height: 200, borderRadius: 2 }}
          resizeMethod={"auto"}
          resizeMode={'contain'}
        />
      </ScrollView>
    )
  }
}


export default App;
