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

export default function Ambiente({navigation}) {
  const [posts, setPosts] = useState([]);

  const getAll = async () => {
    const allPost = await fetch(
      `https://posts2-api.global.ssl.fastly.net/1/dossier/3/posts?apikey=${API_KEY}&apitoken=${API_TOKEN}&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt`
    );

    const data = await allPost.json();

    setPosts(data);
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <ScrollView style={globalStyles.skContainer}>
      <Text style={globalStyles.titleCategory}>
        AMBIENTE E SUSTENTABILIDADE
      </Text>
      {posts?.data?.map((post, index) => (
        <View key={post.l10n[0].id}>
          <HC008
            img={post.baseUrl + "/" + post.l10n[0].image}
            category={post.dossiers[0].managementName}
            title={post.l10n[0].title}
            date={post.l10n[0].publishedAt}
            readTime={post.l10n[0].readTime}
            onPress={() => navigation.navigate("openArticle", { post: post })}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
