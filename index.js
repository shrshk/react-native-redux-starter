/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
