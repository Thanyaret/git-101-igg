import React, {useEffect ,useState} from 'react'
import { View, Text , TouchableHighlight , Button, TouchableOpacity ,ActivityIndicator , FlatList,Image, StyleSheet} from 'react-native'
import axios from 'axios'
export default function MovieList({navigation}) {

    const [movie,setMovie] = useState([])
    const [isLoading,setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://movie-api.igeargeek.com/movies`)
            .then(res => {
            const movie = res.data.data;
            setMovie(movie)
            setLoading(false)
        })
      }, [])
    if (isLoading){
        return(
            <View style={{flex :1,justifyContent:'center'}}>
            <ActivityIndicator/>
            </View>
        )
    }
 
    return (
        <View style={{flex:1}}>
            <FlatList
   data={movie}
   numColumns={2}
   horizontal={false}
   keyExtractor={item => item.id}
   renderItem={({item}) =>{
       return(
           <TouchableHighlight
               style={styles.cardMovie}
            activeOpacity={1}
            onPress={() =>
            		navigation.navigate(
            'MovieDetail',
            { id: item.id }
                )
            }>
       	<View style={styles.movieImage}>
            <Image source={{uri: item.posterUrl}}
                   style={styles.movieImage} />
            		<View style={{padding: 20}}>
                  		<Text style={styles.textDate}>{item.showingAt}</Text>
                  		<Text style={styles.textTitle}>{item.name}</Text>
                  </View>
            	</View>

           </TouchableHighlight>
       )     
   } }
/>
 
            {/* <ActivityIndicator/> */}
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    textDate: {
        color: '#e1b12c'
    },
    textTitle: {
        color: '#fff',
        fontSize: 17,
        marginTop: 5,
        lineHeight: 25
    },
    cardMovie: {
        flex: 1, 
    },
    movieImage: {
        height: 300
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})