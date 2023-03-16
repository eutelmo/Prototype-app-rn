import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { globalStyles } from "../styles/global";
import { APP_NAME, API_TOKEN, API_KEY } from "@env";

import HC008 from "../shared/HC008";

export default function Estilos() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getAll = async () => {
    setIsLoading(true);
    try {
      const allPost = await fetch(
        `https://posts2-api.global.ssl.fastly.net/1/dossier/4/posts?apikey=${API_KEY}&apitoken=${API_TOKEN}&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt`
      ).then( setIsLoading(false));

      const data = await allPost.json();

      setPosts(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(()=>{
    getAll()
 },[])
  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          style={globalStyles.loading}
          size="large"
          color="#00ff00"
        />
      ) : (
        <ScrollView style={globalStyles.skContainer}>
          <Text style={globalStyles.titleCategory}>Estilos De Vida</Text>
          {posts?.data?.map((post, index) => (
            <View key={post.l10n[0].id}>
              <HC008
                img={post.baseUrl + "/" + post.l10n[0].image}
                category={post.dossiers[0].managementName}
                title={post.l10n[0].title}
                date={post.l10n[0].publishedAt}
                readTime={post.l10n[0].readTime}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </>
  );
}