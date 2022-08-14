import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from "./HomeScreen"
import _1  from "./screens/_1"
import _2  from "./screens/_2"
import _3  from "./screens/_3"
import _4  from "./screens/_4"
import _5  from "./screens/_5"
import _6  from "./screens/_6"
import _7  from "./screens/_7"
import _8  from "./screens/_8"

import  _9  from "./screens/_9"
import _10  from "./screens/_10"
import _11  from "./screens/_11"
import _12  from "./screens/_12"
import _13  from "./screens/_13"
import _14  from "./screens/_14"
import _15  from "./screens/_15"
import _16  from "./screens/_16"

import _17  from "./screens/_17"
import _18  from "./screens/_18"
import _19  from "./screens/_19"
import _20  from "./screens/_20"
import _21  from "./screens/_21"
import _22  from "./screens/_22"
import _23  from "./screens/_23"
import _24  from "./screens/_24"

import _25 from "./screens/_25"
import _26  from "./screens/_26"
import _27  from "./screens/_27"
import _28  from "./screens/_28"
import _29  from "./screens/_29"
import _30  from "./screens/_30"
import _31  from "./screens/_31"
import _32  from "./screens/_32"

import _33  from "./screens/_33"
import _34  from "./screens/_34"
import _35  from "./screens/_35"
import _36  from "./screens/_36"
import _37  from "./screens/_37"


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
<Stack.Screen name="HomeScreen" component={HomeScreen} />
<Stack.Screen name="_1" component={_1} />
<Stack.Screen name="_2" component={_2} />
<Stack.Screen name="_3" component={_3} />
<Stack.Screen name="_4" component={_4} />
<Stack.Screen name="_5" component={_5} />
<Stack.Screen name="_6" component={_6}/>
<Stack.Screen name="_7" component={_7}/>
<Stack.Screen name="_8" component={_8}/>

<Stack.Screen name="_9" component={_9} />
<Stack.Screen name="_10" component={_10} />
<Stack.Screen name="_11" component={_11} />
<Stack.Screen name="_12" component={_12} />
<Stack.Screen name="_13" component={_13} />
<Stack.Screen name="_14" component={_14}/>
<Stack.Screen name="_15" component={_15}/>
<Stack.Screen name="_16" component={_16}/>

<Stack.Screen name="_17" component={_17} />
<Stack.Screen name="_18" component={_18} />
<Stack.Screen name="_19" component={_19} />
<Stack.Screen name="_20" component={_20} />
<Stack.Screen name="_21" component={_21} />
<Stack.Screen name="_22" component={_22}/>
<Stack.Screen name="_23" component={_23}/>
<Stack.Screen name="_24" component={_24}/>

<Stack.Screen name="_25" component={_25} />
<Stack.Screen name="_26" component={_26} />
<Stack.Screen name="_27" component={_27} />
<Stack.Screen name="_28" component={_28} />
<Stack.Screen name="_29" component={_29} />
<Stack.Screen name="_30" component={_30}/>
<Stack.Screen name="_31" component={_31}/>
<Stack.Screen name="_32" component={_32}/>

<Stack.Screen name="_33" component={_33} />
<Stack.Screen name="_34" component={_34} />
<Stack.Screen name="_35" component={_35}/>
<Stack.Screen name="_36" component={_36}/>
<Stack.Screen name="_37" component={_37}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;