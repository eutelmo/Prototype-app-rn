import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
} from "react-native";

import { globalStyles } from "../styles/global";

import { API_TOKEN, API_KEY } from "@env";

import HC008 from "../shared/HC008";
import ITC005 from "../shared/ITC005";
import FooterLoading from "../shared/footerLoading";

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);

  const getAll = async () => {
    setIsLoading(true);

    const allPost = await fetch(
      `https://posts2-api.global.ssl.fastly.net/1/posts?apikey=${API_KEY}&apitoken=${API_TOKEN}&per_page=12&page=${page}&include=bodies,tags,photos,albums,authors,labels,audios,documents,dossiers,collections&filter[isoLanguage]=pt`
    );

    const data = await allPost.json();

    setPosts([...posts, ...data.data]);
    setPage(page + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <View style={globalStyles.skContainer}>
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) =>
          index >= 1 ? (
            <HC008
              img={item.baseUrl + "/" + item.l10n[0].image}
              category={item.dossiers[0].managementName}
              title={item.l10n[0].title}
              date={item.l10n[0].publishedAt}
              readTime={item.l10n[0].readTime}
              onPress={() => navigation.navigate("openArticle", { post: item })}
            />
          ) : (
            <ITC005
              img={item.baseUrl + "/" + item.l10n[0].image}
              category={item.dossiers[0].managementName}
              title={item.l10n[0].title}
              date={item.l10n[0].publishedAt}
              readTime={item.l10n[0].readTime}
              onPress={() => navigation.navigate("openArticle", { post: item })}
            />
          )
        }
        onEndReached={getAll}
        onEndReachedThreshold={0.2}
        ListFooterComponent={<FooterLoading Loading={isLoading} />}
      />
    </View>
  );
}

