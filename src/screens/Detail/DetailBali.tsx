import { useNavigation } from '@react-navigation/native';
import * as NavigationBar from "expo-navigation-bar";
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailBali = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const price = 4000;
  const total = price * quantity;

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    return () => {
      NavigationBar.setVisibilityAsync("visible");
    };
  }, []);

  const formatTotal = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleBooking = () => {
    Alert.alert("Booking Berhasil", "Terima kasih telah memesan perjalanan ke Pulau Bali");
  };

  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/Bali.jpg")}
        style={styles.headerImage}
        imageStyle={styles.headerImageStyle}
      >
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>←</Text>
          </TouchableOpacity>
          <View style={styles.weather}>
            <Icon name="sunny-outline" size={20} color="#FF8C00" />
            <Text style={styles.weatherText}>24°C</Text>
          </View>

        </View>

        <View style={{ flex: 0.9 }} />

        <View style={styles.textOverlay}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐</Text>
            <Text style={styles.ratingValue}>5.0</Text>
          </View>

          <Text style={styles.title}>Bali</Text>

          <Text style={styles.desc}>
           Step through Bali’s sacred gates and feel the harmony of nature and culture. 
           Every moment becomes a journey of peace and wonder.
          </Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.scroll}>
        <View style={styles.countryContainer}>
          <Text style={styles.countryFlag}>🇮🇩</Text>
          <Text style={styles.countryText}>Indonesia</Text>
        </View>

        <Text style={styles.sectionTitle}>Discover the Beauty of Bali Isaland</Text>

        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
              style={styles.avatar}
            />
            <Text style={styles.reviewAuthor}>By Riqi Starboy</Text>
          </View>
          <Text style={styles.reviewText}>
            Wow amazing yahh, best experience in my life! Very worth it, I like it!
          </Text>
        </View>

        <View style={[styles.reviewCard, styles.reviewCardSecondary]}>
          <View style={styles.reviewHeader}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/42.jpg" }}
              style={styles.avatar}
            />
            <Text style={styles.reviewAuthor}>By Mira sadgirl</Text>
          </View>
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.recommendTitle}>Recommendation in Bali</Text>
        <View style={styles.recommendCard}>
          <Image
            source={require("../../../assets/images/Tanah_Lot.jpg")}
            style={styles.recommendImage}
          />
          <View style={{ padding: 10, flex: 1 }}>
            <Text style={styles.recommendName}>Wisata Tanah Lot</Text>
            <Text style={styles.recommendDesc}>Feel the ocean breeze and sacred vibes of Tanah Lot</Text>
          </View>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <View style={styles.counterAndTotal}>
            <View style={styles.counter}>
              <TouchableOpacity
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                style={styles.counterBtnMinus}
              >
                <Text style={styles.counterText}>–</Text>
              </TouchableOpacity>

              <Text style={styles.counterValue}>{quantity}</Text>

              <TouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                style={styles.counterBtn}
              >
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.totalPrice}>
              <Text style={styles.totalAmountLabel}>Total Amount</Text>
              <Text style={styles.totalText}>$ {formatTotal(total)}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.bookBtn} onPress={handleBooking}>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailBali;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  
  headerImage: {
    height: 350,
    justifyContent: 'flex-start', 
  },
  headerImageStyle: {
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: -10,
    borderRadius: 75,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weather: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: 8,
    borderRadius: 20,
  },
  weatherText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
  },

  textOverlay: {
    paddingHorizontal: 5,
    paddingBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.2)', 
    paddingTop: 2,
  },
  ratingContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  ratingText: { 
    fontSize: 14 
  },
  ratingValue: { 
    marginLeft: 4, 
    fontWeight: '600', 
    color: '#fff' 
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#fff' 
  },
  desc: { 
    marginTop: 5, 
    color: '#fff', 
    lineHeight: 20,
    fontSize: 15
  },

  scroll: { 
    flex: 1, 
    paddingHorizontal: 20,
    marginTop: -20, 
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  countryFlag: {
    fontSize: 20,
    marginRight: 8,
  },
  countryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ee1313ff',
  },

  sectionTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#000',
    marginTop: -10,
  },

  reviewCard: {
    marginTop: 8,
    backgroundColor: '#f7f6f6ff',
    padding: 15,
    borderRadius: 15,
  },
  reviewCardSecondary: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  reviewAuthor: { 
    fontSize: 14, 
    color: '#2b2929ff',
    fontWeight: 'bold'
  },
  reviewText: { 
    marginTop: 5, 
    color: '#302e2eff', 
    fontSize: 13 
  },
  viewAllBtn: {
    backgroundColor: '#EBEBEB',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  viewAllText: {
    fontWeight: 'bold',
    color: '#000'
  },
  recommendTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 35,
    marginBottom: 10,
  },
  recommendCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e64210ff',
    elevation: 5, 
  },
  recommendImage: { 
    width: 120, 
    height: 100 
  },
  recommendName: { 
    fontWeight: 'bold',
    fontSize: 16,
  },
  recommendDesc: { 
    fontSize: 14, 
    color: '#242020ff', 
    marginTop: 5,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0102079d',
    paddingBottom: 0,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    overflow: 'hidden',
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  counterAndTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  counter: { 
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  counterBtn: {
    backgroundColor: '#35f845ff', 
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  counterBtnMinus: {
    backgroundColor: '#ec3413ff',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  counterText: { 
    color: '#eee6e6ff', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  counterValue: { 
    color: '#fff', 
    marginHorizontal: 15, 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  
  totalPrice: { 
    alignItems: 'flex-end' 
  },
  totalAmountLabel: { 
    color: '#fcf8f8ff', 
    fontSize: 14 
  },
  totalText: { 
    color: 'rgba(255, 255, 255, 1)', 
    fontSize: 22, 
    fontWeight: 'bold',
    marginTop: 2,
  },
  
  bookBtn: {
    backgroundColor: '#5be96ef3',
    paddingVertical: 10,
    alignItems: 'center',
  },
  bookText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});
