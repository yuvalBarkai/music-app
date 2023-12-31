import { useState } from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default function NavigationLinks() {
   const [isActive, setActive] = useState(-1);
   return (
      <View style={styles.linksBar}>
         <Link to="/Intervals" style={isActive == 0 ? styles.active : null}
            onPress={() => setActive(0)}>
            <Text style={styles.linkButton}>Intevals</Text>
         </Link>
         <Link to="/Arpeggiator" style={isActive == 1 ? styles.active : null}
            onPress={() => setActive(1)}>
            <Text style={styles.linkButton}>Arpeggiator</Text>
         </Link>
         <Link to="/Scales" style={isActive == 2 ? styles.active : null}
            onPress={() => setActive(2)}>
            <Text style={styles.linkButton}>Scales</Text>
         </Link>
      </View>
   )
}

