import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../colors';
import { spacing, fontSizes } from '../sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We have not focused on anything yet</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- { item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What we have focused on:</Text>
      <FlatList  data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
});
