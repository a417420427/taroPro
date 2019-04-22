import { Cube } from '../components/Cube'
import { CubeProp } from '../types'
import { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';


export class CubeContainers extends Component<{cubeProps: CubeProp[]}> {
    render() {
        const cubeProps = this.props.cubeProps
        
        return <View style={{width: 320, height: 320, position: 'relative'}} className="cube-container">
            {cubeProps.map(cube => <Cube cubeProp={cube}/>)}
        </View>
    }
}
