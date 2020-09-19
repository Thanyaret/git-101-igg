import React,{useEffect, useState} from 'react'
import { View,Text,Image,StyleSheet,ScrollView} from 'react-native'
import { WebView } from 'react-native-webview';
import axios from 'axios'

export default function MovieDetail({navigation,route}) {

    const [movie,setMovie] = useState ({
        genre:[]
    })

    useEffect(() => {
        const itemId = route.params.id
        axios.get(`https://movie-api.igeargeek.com/movies/${itemId}`)
            .then(res => {
            const movie = res.data;
            setMovie(movie)
            setLoading(false)
        })
      }, [])
        
    return (
        <ScrollView 
        showsVerticalScrollIndicator = {false}
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}>
         <WebView
         allowsFullscreenVideo
        source={{uri:movie.youtubeUrl}}
        style={{height:150,flex:1}}
        />
        <View style={{flex:2 ,padding:15,backgroundColor:'#362420'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={{uri:movie.posterUrl}} 
                style={{flex:1,height:150}}
                resizeMode={'stretch'}
                />
                <View style={{flex:2,marginLeft:15}}>
                <Text style={{color:'white',fontSize:'17'}}>{movie.name}</Text>
                <Text style={{color:'white',fontSize:'14'}}> ประเภท :{movie.genre.join(',')}</Text>
                </View>
            

            </View>

        </View>
        </ScrollView>
    )
}
