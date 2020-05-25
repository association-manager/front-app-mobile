import React from 'react';
import { Divider, TopNavigation } from '@ui-kitten/components';
import { DashboardCardList } from '../components/dashboard-card-list.component';
import { data } from '../services/dashboardData';

import styles from '../assets/styles/layoutStyle.style';

export const DashboardScreen = ({ navigation}: any): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  return (
    <>
{/*       style={styles.container}
      insets='top'> */}
      <Divider/>
      <DashboardCardList
        data={data}
        onItemPress={onItemPress}
      />
    </>
  );
};
