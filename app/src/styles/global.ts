import { StyleSheet } from 'react-native';
import { StatusBarHeight } from '../utils/status-bar';

export const safeAreaViewPadding = StatusBarHeight;

const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 18,
    color: 'white',
  },
  rcc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  rcsb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rcsa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rcfs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rcfe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rfsfs: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  rfefs: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  ccc: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cfssb: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  ccsb: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cfsfs: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  ccs: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rss: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
export default globalStyles;