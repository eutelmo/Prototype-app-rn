import React, { useEffect, useState } from "react";

import { ActivityIndicator, ScrollView, Text, Image, SafeAreaView } from "react-native";

import ArticleOpen from "../shared/templates/articleOpen";

import { globalStyles } from "../styles/global";

import { APP_NAME, API_TOKEN, API_KEY } from "@env";

export default function openArticle({ route }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const { post } = route.params;

  return (
    <SafeAreaView>
      <ScrollView style={globalStyles.skContainer}>
        {!isLoading ? (
          <ActivityIndicator
            style={globalStyles.loading}
            size="large"
            color="#00ff00"
          />
        ) : (
          <>
            <ArticleOpen
              title={post.l10n[0].title}
              image={post.baseUrl + "/" + post.l10n[0].image}
              read={post.l10n[0].readTime}
              date={post.l10n[0].publishedAt}
              description={post.l10n[0].description}
              body={post.l10n[0].bodies[0].text}
              tags={post.l10n[0].tags}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
