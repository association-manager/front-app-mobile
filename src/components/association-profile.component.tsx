import React from 'react';
import { ImageBackground } from 'react-native';
import { Layout, Text, useStyleSheet } from '@ui-kitten/components';
import { KeyboardAvoidingView } from './keyboard-avoiding-view.component';
import { CommentList } from './comment-list.component';
import { AssociationProfile } from './../services/associationProfileData';

import { themedStyles } from '../assets/styles/project-task-detail-styles';

const data: AssociationProfile = AssociationProfile.defaultAssociationProfile();

export default (): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const renderHeader = (): React.ReactElement => (
    <Layout
      style={styles.header}
      level='1'>
      <Text
        style={styles.titleLabel}
        category='h4'>
        {data.profileDetail.association.name}
      </Text>
      <Text
        style={styles.dateLabel}
        appearance='hint'
        category='p2'>
        {data.profileDetail.association.associationType}
      </Text>
      <Text
        style={styles.descriptionLabel}
        category='s1'>
        {data.profileDetail.descriptionTitle}
      </Text>
      <ImageBackground
        style={styles.image}
        source={data.profileDetail.association.file.fileFind.url}
      />
      <Text style={styles.contentLabel}>
        {data.profileDetail.description}
      </Text>
    </Layout>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      >
      <CommentList
        style={styles.list}
        data={null}
        ListHeaderComponent={renderHeader}
      />
    </KeyboardAvoidingView>
  );
};
