import { View, Text } from "@tarojs/components";
import { Component } from "@tarojs/taro";
import { CubeProp } from '../types'

import styles from './cube.scss'

export class Cube extends Component<{cubeProp: CubeProp}>{
    render() {
        const { cubeProp } = this.props
        return <View
            style={styles.flexItem}
         className="flex-item">
            <Text>{cubeProp.num}</Text>
        </View>
    }
}