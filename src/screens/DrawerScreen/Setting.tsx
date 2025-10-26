import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Setting = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isNotifications, setIsNotifications] = React.useState(true);
  const [isLocationEnabled, setIsLocationEnabled] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Icon name="person-outline" size={24} color="#666" />
            <Text style={styles.settingText}>Profile</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Icon name="notifications-outline" size={24} color="#666" />
            <Text style={styles.settingText}>Notifications</Text>
          </View>
          <Switch
            value={isNotifications}
            onValueChange={setIsNotifications}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Icon name="moon-outline" size={24} color="#666" />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Icon name="location-outline" size={24} color="#666" />
            <Text style={styles.settingText}>Location Services</Text>
          </View>
          <Switch
            value={isLocationEnabled}
            onValueChange={setIsLocationEnabled}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>More</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Icon name="help-circle-outline" size={24} color="#666" />
            <Text style={styles.settingText}>Help & Support</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Icon name="information-circle-outline" size={24} color="#666" />
            <Text style={styles.settingText}>About</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
});

export default Setting;
