import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePlan = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (datetime) => {
    setSelectedDate(datetime);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
        </Text>
        <Button title="Select a date" onPress={showDatePicker} color={"#D353FF"}/>
        <DateTimePickerModal
          accentColor='#D353FF'
          buttonTextColorIOS='#D353FF'
          date={selectedDate ? new Date(selectedDate) : undefined}
          minimumDate={new Date(selectedDate)}
          maximumDate={new Date('2024-06-01')}          
          isVisible={datePickerVisible}
          mode="datetime"
          display="inline"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </SafeAreaView>
  );
};

export default DatePlan;
