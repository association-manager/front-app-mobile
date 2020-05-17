import React from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import { Input, Layout, Text, useStyleSheet, RadioGroup, Radio } from '@ui-kitten/components';
import { KeyboardAvoidingView } from '../../components/keyboard-avoiding-view.component';
import { CommentList } from '../../components/comment-list.component';
import { ProjectTaskDetail } from './extra/data';
import { ProjectTaskListItem} from '../../models/project-task-list-item.models';

import { themedStyles } from './assets/styles';

const data: ProjectTaskDetail = ProjectTaskDetail.howToEatHealthy();

const keyboardOffset = (height: number): number => Platform.select({
  android: 0,
  ios: height,
});

export default (): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);
  const [inputComment, setInputComment] = React.useState<string>();
  const [selectedProgressIndex, setSelectedProgressIndex] = React.useState<number>();
  
  const renderProgressItem = (progress: ProjectTaskListItem, index: number): React.ReactElement => (
    <Radio
      key={index}
      style={styles.colorRadio}
      // textStyle={{ color: color.value }}
      text={progress.description.toUpperCase()}
    />
  );

  const renderHeader = (): React.ReactElement => (
    <Layout
      style={styles.header}
      level='1'>
      <Text
        style={styles.titleLabel}
        category='h4'>
        {data.title}
      </Text>
      <Text
        style={styles.descriptionLabel}
        category='s1'>
        {data.description}
      </Text>
      <ImageBackground
        style={styles.image}
        source={data.image}
      />
      <Text style={styles.contentLabel}>
        {data.content}
      </Text>
      <Text
          style={styles.sectionLabel}
          category='h6'>
        Progress:
      </Text>
      <RadioGroup
        style={styles.colorGroup}
        selectedIndex={selectedProgressIndex}
        onChange={setSelectedProgressIndex}>
        {data.progress.map(renderProgressItem)}
      </RadioGroup>
      <View style={styles.authoringContainer}>
        <Text
          appearance='hint'
          category='p2'>
          {`By ${data.author.fullName}`}
        </Text>
        <Text
          style={styles.dateLabel}
          appearance='hint'
          category='p2'>
          {data.date}
        </Text>
      </View>
      <Input
        style={styles.commentInput}
        labelStyle={styles.commentInputLabel}
        label='Comments'
        placeholder='Write your comment'
        value={inputComment}
        onChangeText={setInputComment}
      />
    </Layout>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      offset={keyboardOffset}>
      <CommentList
        style={styles.list}
        data={data.comments}
        ListHeaderComponent={renderHeader}
      />
    </KeyboardAvoidingView>
  );
};
