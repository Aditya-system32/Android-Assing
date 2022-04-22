import React,{useState,useEffect} from 'react';
import { View, Text,Image, ScrollView,StyleSheet } from 'react-native';

import { TextInput,Button } from 'react-native-paper';

function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("https://my-json-server.typicode.com/easygautam/data/users");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData()
  }, [loading])
  
  
  return(
    <View style={styles.container}>
      <View style={styles.recyBack}>
        <Text style={styles.recyText}>Recycler View</Text>
      </View>
    {loading?null:
      <ScrollView>
      {data.map((userData)=>{
        return(
          <View key={userData.id} style={styles.card}>
            <View style={styles.back}>
              <Text style={styles.nameText}>{userData.name}</Text>
              <View style={styles.textBox}>
                <Text>{userData.subjects}  </Text>
                <Text>•  </Text>
                <Text numberOfLines={1}>{userData.qualification}</Text>
              </View>
              <Button contentStyle={{height:30}} style={{width:118,borderRadius:15,marginTop:15}} labelStyle={{fontSize:12}} mode="contained" onPress={() => console.log('Pressed')}>
                View More
              </Button>
            </View>
            <View style={styles.imageBack}>
              <Image style={styles.images} source={{uri:userData.profileImage}}></Image>
            </View>
          </View>
        )
      })} 
    </ScrollView>
    }
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  card:{
    width:"92%",
    alignSelf:'center',
    elevation:20,
    backgroundColor:"white",
    borderRadius:5,
    marginTop:10,
    flexDirection:"row",
    padding:15,
    alignItems:"center"
  },
  images:{
    width:75,
    height:100,
    borderRadius:15
    
  },
  imageBack:{
    marginLeft:"auto",
    backgroundColor:"grey",
    borderRadius:15
  },
  container:{
    marginTop:15,
    paddingBottom:65
  },
  nameText:{
    fontSize:18,color:"#2661bf"
  },
  recyBack:{
    marginTop:10,
    height:50,
    backgroundColor:"#4d5bc9",
    borderBottomEndRadius:10,
    borderBottomLeftRadius:10,alignItems:"center",justifyContent:"center"
  },
  recyText:{
    color:"white",fontSize:15
  },
  textBox:{
    flexDirection:"row"
  },
  back:{
    width:"50%"
  }

})
