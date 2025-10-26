import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; 

const Home = () => {
  const navigation = useNavigation<any>(); 
  const [favorite1, setFavorite1] = useState(false);
  const [favorite2, setFavorite2] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hi}>Hi,</Text>
          <Text style={styles.name}>Sutisna</Text>
        </View>
        <View style={styles.weather}>
          <Icon name="sunny-outline" size={20} color="#FF8C00" />
          <Text style={styles.weatherText}>25°C</Text>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Plan Your Summer!</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Icon name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={18} color="#555" />
          <TextInput
            placeholder="Search destination..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="options-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Popular Destination */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Destination</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Destination Cards */}
      <View style={styles.destinationContainer}>
        {/* Card 1 - Bali */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('DetailBali')}
        >
          <ImageBackground
            source={require('../../../assets/images/Bali.jpg')}
            style={styles.cardImage}
            imageStyle={{ borderRadius: 20 }}>
            <View style={styles.cardTop}>
              <Text style={styles.country}>🇮🇩 Indonesia</Text>
              <TouchableOpacity onPress={() => setFavorite1(!favorite1)}>
                <Icon 
                  name={favorite1 ? "heart" : "heart-outline"} 
                  size={20} 
                  color={favorite1 ? "#ff0000" : "#fff"} 
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cardBottom}>
              <Text style={styles.location}>Bali</Text>
              <View style={styles.infoRow}>
                <Icon name="star" size={14} color="#FFD700" />
                <Text style={styles.rating}>5.0</Text>
                <Text style={styles.price}>$4,000</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* Card 2 - Hawaii */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('DetailLabuanBajo')}
        >
          <ImageBackground
            source={require('../../../assets/images/hawai.jpg')}
            style={styles.cardImage}
            imageStyle={{ borderRadius: 20 }}>
            <View style={styles.cardTop}>
              <Text style={styles.country}>🇺🇸 United States</Text>
              <TouchableOpacity onPress={() => setFavorite2(!favorite2)}>
                <Icon 
                  name={favorite2 ? "heart" : "heart-outline"} 
                  size={20} 
                  color={favorite2 ? "#ee3a3aff" : "#fff"} 
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cardBottom}>
              <Text style={styles.location}>Hawaii</Text>
              <View style={styles.infoRow}>
                <Icon name="star" size={14} color="#FFD700" />
                <Text style={styles.rating}>4.8</Text>
                <Text style={styles.price}>$5,200</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F2',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hi: {
    color: '#777',
    fontSize: 16,
  },
  name: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  weather: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  banner: {
    marginTop: 30,
    backgroundColor: '#FF784E',
    borderRadius: 20,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    width: '70%',
  },
  bannerButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 10,
    borderRadius: 15,
  },
  searchContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    backgroundColor: '#F0EEDF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 15,
    height: 45,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#0C2233',
    marginLeft: 10,
    padding: 10,
    borderRadius: 12,
  },
  sectionHeader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  viewAll: {
    color: '#999',
  },
  destinationContainer: {
    marginTop: 15,
  },
  card: {
    marginBottom: 20,
  },
  cardImage: {
    height: 180,
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardBottom: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  country: {
    color: '#fff',
    fontSize: 12,
  },
  location: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    color: '#fff',
    marginLeft: 4,
    marginRight: 10,
  },
  price: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Home;
