import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CustomScreenHeader from '../../components/screenHeader';
import {APP_ICONS} from '../../utils/icons';
import {COMMON_COLORS} from '../../constants/colors';

const sampleHistoryData = [
  {
    monthYear: 'November 2024',
    records: [
      {
        timeStamp: '10.30AM NOV 19 2024',
        description: 'VIJAY CARS #ABCDEF',
        completed: true,
      },
      {
        timeStamp: '12.00PM NOV 20 2024',
        description: 'VIJAY CARS #XYZ123',
        completed: false,
      },
    ],
  },
  {
    monthYear: 'October 2024',
    records: [
      {
        timeStamp: '9.00AM OCT 10 2024',
        description: 'VIJAY CARS #GHI789',
        completed: true,
      },
      {
        timeStamp: '11.15AM OCT 12 2024',
        description: 'VIJAY CARS #LMN456',
        completed: false,
      },
      {
        timeStamp: '11.15AM OCT 12 2024',
        description: 'VIJAY CARS #LMN456',
        completed: false,
      },
      {
        timeStamp: '11.15AM OCT 12 2024',
        description: 'VIJAY CARS #LMN456',
        completed: false,
      },
    ],
  },
  {
    monthYear: 'September 2024',
    records: [],
  },
  {
    monthYear: 'August 2024',
    records: [
      {
        timeStamp: '2.30PM AUG 15 2024',
        description: 'VIJAY CARS #PQR678',
        completed: true,
      },
      {
        timeStamp: '4.45PM AUG 18 2024',
        description: 'VIJAY CARS #UVW890',
        completed: false,
      },
    ],
  },
];

// Helper function to filter data for each category
const getFilteredDataByCategory = (data, filterType) => {
  return data
    .map(month => ({
      ...month,
      records:
        filterType === 'all'
          ? month.records
          : month.records.filter(record =>
              filterType === 'upcoming' ? !record.completed : record.completed,
            ),
    }))
    .filter(month => month.records.length > 0); // Remove months with no records
};

// Render section list for history
const HistoryList = ({data}) => (
  <SectionList
    sections={data.map(month => ({
      title: month.monthYear,
      data: month.records,
    }))}
    renderSectionHeader={({section: {title}}) => (
      <Text style={styles.monthHeader}>{title}</Text>
    )}
    renderItem={({item}) => (
      <TouchableOpacity style={styles.historyListItem}>
        <View style={styles.historyListItemIconWrapper}>
<Image source={APP_ICONS.GOD} style={styles.historyListItemIcon} />
        </View>
        <View>
        <Text style={styles.historyItemText}>{item.timeStamp}</Text>
        <Text style={styles.historyItemDescription}>{item.description}</Text>

        </View>
        <View>

        </View>
      </TouchableOpacity>
    )}
    keyExtractor={(item, index) => `${item.timeStamp}-${index}`}
    contentContainerStyle={styles.sectionListContent}
  />
);

const Upcoming = () => (
  <View style={styles.scene}>
    <HistoryList
      data={getFilteredDataByCategory(sampleHistoryData, 'upcoming')}
    />
  </View>
);

const Completed = () => (
  <View style={styles.scene}>
    <HistoryList
      data={getFilteredDataByCategory(sampleHistoryData, 'completed')}
    />
  </View>
);

const All = () => (
  <View style={styles.scene}>
    <HistoryList data={getFilteredDataByCategory(sampleHistoryData, 'all')} />
  </View>
);

const BookingHistoryScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'all', title: 'All'},
    {key: 'upcoming', title: 'Upcoming'},
    {key: 'completed', title: 'Completed'},
  ]);

  return (
    <View style={styles.container}>
      <CustomScreenHeader
        leadingIcon={APP_ICONS.BACK}
        title={'Booking History'}
      />

      <TabView
        navigationState={{index, routes}}
        renderScene={SceneMap({
          upcoming: Upcoming,
          completed: Completed,
          all: All,
        })}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar}
            activeColor={COMMON_COLORS.BLACK}
            inactiveColor={COMMON_COLORS.BLACK}
            indicatorStyle={styles.tabIndiator}
            labelStyle={styles.tabLabel}
          />
        )}
      />
    </View>
  );
};

export default BookingHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scene: {
    flex: 1,
    padding: moderateScale(10),
  },
  tabBar: {
    backgroundColor: 'white',
  },
  tabIndiator: {
    backgroundColor: COMMON_COLORS.PRIMARY,
  },
  sectionListContent: {
    paddingBottom: moderateScale(20),
  },
  monthHeader: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#333',
    marginVertical: moderateScale(10),
  },
  historyListItem: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    marginVertical: moderateScale(5),
   borderColor: COMMON_COLORS.BLACK,
   borderWidth:2,
    borderRadius: moderateScale(10),
    flexDirection: "row"
  
  },
  historyItemText: {
    fontSize: moderateScale(14),
    color: '#333',
    fontWeight: 'bold',
  },
  historyItemDescription: {
    fontSize: moderateScale(12),
    color: '#555',
    marginTop: moderateScale(5),
  },historyListItemIconWrapper: {
  

  },historyListItemIcon: {
    height: moderateScale(10),
    width: moderateScale(10),
    resizeMode: "contain"
  }
});
