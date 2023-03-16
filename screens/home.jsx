import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { globalStyles } from "../styles/global";

import { APP_NAME, API_TOKEN, API_KEY } from "@env";

import HC008 from "../shared/HC008";
import ITC005 from "../shared/ITC005";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getAll = async () => {
    setIsLoading(true);

    try {
      const allPost = await fetch(
        `https://posts2-api.global.ssl.fastly.net/1/posts?apikey=${API_KEY}&apitoken=${API_TOKEN}&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt`
      );

      const data = await allPost.json();

      setIsLoading(false);
      setPosts(data);
    } catch (error) {
      setError(error);
    }

    useEffect(() => {
      getAll();
    }, []);

    return (
      
    
          <ScrollView style={globalStyles.skContainer}>
            {posts?.data?.map((post, index) => (
              <View key={post.l10n[0].id}>
                {index >= 1 ? (
                  <HC008
                    img={post.baseUrl + "/" + post.l10n[0].image}
                    category={post.dossiers[0].managementName}
                    title={post.l10n[0].title}
                    date={post.l10n[0].publishedAt}
                    readTime={post.l10n[0].readTime}
                    onPress={() => console.log(post)}
                  />
                ) : (
                  <ITC005
                    img={post.baseUrl + "/" + post.l10n[0].image}
                    category={post.dossiers[0].managementName}
                    title={post.l10n[0].title}
                    date={post.l10n[0].publishedAt}
                    readTime={post.l10n[0].readTime}
                    onPress={() => console.log(post)}
                  />
                )}
              </View>
            ))}
          </ScrollView>
      
    );
  };
}
