import React from 'react';
import {ImageProps} from 'react-native';
import {Button, Divider, Layout, TopNavigation, Icon} from '@ui-kitten/components';
import styles from '../styles/layoutStyle.component';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props: ImageProps): React.ReactElement<ImageProps> => (
  <Icon {...props} name='heart'/>
);

export interface HomeComponentProps {
  navigation?: () => void
}

export const HomeComponent = (props: HomeComponentProps ): React.ReactElement  => {

  const navigation = props.navigation
  return (
    <>
      <TopNavigation title='association manager Project' alignment='center' />
      <Divider />
      <Layout style={styles.container}>
        <Button style={styles.likeButton} onPress={navigation} icon={HeartIcon}>OPEN DETAILS</Button>
      </Layout>
    </>
    );
};