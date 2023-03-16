import React, { useEffect, useState } from "react";

import { ActivityIndicator, ScrollView, Text } from "react-native";

 import articleOpen from "../shared/templates/articleOpen";


import { globalStyles } from "../styles/global";

import { APP_NAME, API_TOKEN, API_KEY } from "@env";

export default function openArticle({ route, ...props }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { baseUrl, publicId, l10n, createdAt } = route.params;

  const getAll = async () => {
    setIsLoading(true);

    try {
      const allPost = await fetch(
        `https://posts2-api.global.ssl.fastly.net/1/posts?apikey=${API_KEY}&apitoken=${API_TOKEN}[…]ter[isoLanguage]=pt&filter[post.publicId]=${publicId}`
      );

      const data = await allPost.json();

      setIsLoading(false);
      setPosts(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <ScrollView style={globalStyles.skContainer}>
      {isLoading ? (
        <ActivityIndicator
          style={globalStyles.loading}
          size="large"
          color="#00ff00"
        />
      ) : (
        // <articleOpen
        //   title={"title"}
        //   image={"urlImage"}
        //   read={"read"}
        //   date={"date"}
        //   description={"description"}
        //   body={"body"}
        //   tags={"tags"}
        // />
        <Text>osla</Text>
      )}
    </ScrollView>
  );
}
