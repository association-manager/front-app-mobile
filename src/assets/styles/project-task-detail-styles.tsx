import { StyleService } from '@ui-kitten/components';

export const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
    paddingBottom: 8,
  },
  list: {
    flex: 1,
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 240,
  },
  titleLabel: {
    marginHorizontal: 24,
    marginVertical: 12,
  },
  sectionLabel: {
    margin: 8,
  },
  descriptionLabel: {
    margin: 24,
  },
  contentLabel: {
    margin: 24,
  },
  authoringContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  dateLabel: {
    marginHorizontal: 32,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: 'text-basic-color',
  },
  commentInput: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 20,
  },
  colorGroup: {
    marginLeft: 8,
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  colorRadio: {
    marginHorizontal: 8,
  },
});
