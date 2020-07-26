// ------------- view-------------//
// import React, { Component } from 'react'
// import { View, StyleSheet } from 'react-native'

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.box} />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'skyblue',
//     borderWidth: 2,
//     borderColor: 'steelblue',
//     borderRadius: 20,
//   },
// })


// ---------------TEXT----------//
// import React, { Component } from 'react'
// import { View, Text, StyleSheet } from 'react-native'

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Hello!</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     backgroundColor: 'whitesmoke',
//     color: '#4A90E2',
//     fontSize: 24,
//     padding: 10,
//   },
// })


// ---------IMAGE----------//
// import React, { Component } from 'react'
// import { Image, StyleSheet } from 'react-native'

// export default class App extends Component {
//   render() {
//     return (
//       <Image
//         style={styles.image}
//         source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}
//       />
//     )
//   }
// }

// const styles = StyleSheet.create({
//   image: {
//     width: 200,
//     height: 200,
//   },
// })


//----------------ScrollView-----------------//
// import React, { Component } from 'react'
// import { ScrollView, View, StyleSheet, } from 'react-native'

// export default class App extends Component {
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <View style={styles.boxLarge} />
//         <ScrollView horizontal>
//           <View style={styles.boxSmall} />
//           <View style={styles.boxSmall} />
//           <View style={styles.boxSmall} />
//         </ScrollView>
//         <View style={styles.boxLarge} />
//         <View style={styles.boxSmall} />
//         <View style={styles.boxLarge} />
//       </ScrollView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   boxSmall: {
//     width: 200,
//     height: 200,
//     marginBottom: 10,
//     marginRight: 10,
//     backgroundColor: 'skyblue',
//   },
//   boxLarge: {
//     width: 300,
//     height: 300,
//     marginBottom: 10,
//     marginRight: 10,
//     backgroundColor: 'steelblue',
//   },
// })


// ---------------- FlatList ----------------//
// import React, { Component } from 'react';
// import { FlatList, Text, StyleSheet } from 'react-native';

// const rows = [
//   { id: 0, text: 'View' },
//   { id: 1, text: 'Text' },
//   { id: 2, text: 'Image' },
//   { id: 3, text: 'ScrollView' },
//   { id: 4, text: 'ListView' },
// ]

// const extractKey = ({ id }) => id

// export default class App extends Component {

//   renderItem = ({ item }) => {
//     return (
//       <Text style={styles.row}>
//         {item.text}
//       </Text>
//     )
//   }
//   render() {
//     return (
//       <FlatList
//         style={styles.container}
//         data={rows}
//         renderItem={this.renderItem}
//         keyExtractor={extractKey}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   row: {
//     padding: 15,
//     marginBottom: 5,
//     backgroundColor: 'skyblue',
//   },
// })


//-------------TouchableOpacity--------
// import React, { Component } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default class App extends Component {
// constructor(){
//   super();
//   this.state = {
//     count : 3
//   }
// }

// onPress (){
//   this.setState({ count: this.state.count + 1 }); 
// }

// render(){
// return (
//  <View style={styles.container}>
//       <View style={styles.countContainer}>
//         <Text>Count: {this.state.count}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => this.onPress()}
//       >
//         <Text>Press Here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       paddingHorizontal: 10
//     },
//     button: {
//       alignItems: "center",
//       backgroundColor: "#DDDDDD",
//       padding: 10
//     },
//     countContainer: {
//       alignItems: "center",
//       padding: 10
//     }
//   }); 

//------------- TextInput------------//
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Useless Placeholder',
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ value: text })}
          value={this.state.value}
        />
        <Text>{this.state.value}</Text>
      </View>
    );
  }
}
