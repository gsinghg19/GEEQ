import { useNavigation, useNavigationParam } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {
  collection,
  doc,
  addDoc,
  getDocs,
  setDoc,
  query,
  where,
  collectionGroup,
  document,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db } from '../firebase';

import { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import GlobalCSS from '../GlobalCSS';
import { Link } from '@react-navigation/native';

export default function ViewGroups({ navigation }) {
  //const navigation = useNavigation();
  const [groups, setGroups] = useState([]);
  const collRef = collection(db, 'groups');

  const gettingDocs = async () => {
    try {
      const fdocs = await getDocs(collRef);

      let groups = [];

      fdocs.docs.map((doc) => {
        groups.push({ id: doc.id, ...doc.data() });
      });
      console.log('in gettingDocs', groups);
      setGroups(groups);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    gettingDocs();
  }, []);

  return (
    <ScrollView>
      <View style={(GlobalCSS.container, GlobalCSS.viewBorder)}>
        {groups.map((group) => {
          return (
            <TouchableOpacity
              style={GlobalCSS.groupViewBorder}
              onPress={() => {
                navigation.navigate('Group', { group_id: group.id });
              }}
            >
              {/* <Link
                to={{
                  screen: 'Group',
                  params: { group_id: '4cXw12VSrQoKHmKsL1Di' },
                }}
              > */}

              <Text key={group.id}>Group name: {group.group_name}</Text>
              <Text key={group.users.length}>
                This group has {group.users.length} users.
                {/* {group.users.map((user) => {
                  return <Text key={user.uid}>{user.name}</Text>;
                })} */}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
