import Portofolio from './portofolio'
import News from './news'
import {
    createMaterialTopTabNavigator
} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

export const TopTabNavigator = createMaterialTopTabNavigator(
    {
        Portofolio: { screen: Portofolio },
        News: { screen: News },
    }
)

// export default createAppContainer(TopTabNavigator)