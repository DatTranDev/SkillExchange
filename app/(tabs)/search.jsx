import React, { useState } from "react";
import { SafeAreaView, SectionList, Text, Dimensions, View } from "react-native";
import { Stack } from "expo-router";
import { ScreenHeaderBtn } from "../../components";
import favicon from "@assets/favicon.svg";
import { COLORS, icons } from "../../constants";
import Topic_List from "../../components/Search_Tutorials_Tab/Topic_List";
import Topic_Remarkable_List from "../../components/Search_Tutorials_Tab/Topic_Remarkable_List";
import InputTextBox from "../../components/Search_Tutorials_Tab/Search_Input/InputTextBox";
import Topic_Tags_List from "../../components/Search_Tutorials_Tab/Topic_Tags_List";
import Topic_Hot_List from "../../components/Search_Tutorials_Tab/Topic_Hot_List";
// Search.jsx
const Search = () => {
    const sections = [
        { title: null, data: ['Topic_Tags_List'] },
        { title: 'Popular Topic', data: ['Topic_List'] },
        { title: 'Trending Topic', data: ['Topic_Hot_List'] },
        { title: 'Remarkable Issue', data: ['Topic_Remarkable_List'] },
    ];

    const renderItem = ({ item }) => {  
        switch (item) {
            case 'Topic_Tags_List':
                return <Topic_Tags_List  style={{zIndex:1}}/>;
            case 'Topic_Remarkable_List':
                return <Topic_Remarkable_List  style={{zIndex:1}}/>;
            case 'Topic_List':
                return <Topic_List  style={{zIndex:1}}/>;
            case 'Topic_Hot_List':
                return <Topic_Hot_List style={{zIndex:1}}/>;
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, position: 'relative' }}>
            <Stack.Screen
				options={{
					title: "Search",
					headerShown: false,
					headerTitle: "",
				}}
			/>
            <SafeAreaView style={{ marginLeft: 15, zIndex: -1 }}>
				<ScreenHeaderBtn
					iconUrl={favicon}
					dimension={40}
					string="SkillExchange"
					style={{ marginLeft: 10 }}
				/>
			</SafeAreaView>
            <View style={{zIndex: 2}}>
                <InputTextBox style={{zIndex: 2}}/>
            </View>
            <SectionList 
                sections={sections}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    title ? (
                        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: "700" }}>{title}</Text>
                            <Text> _____________________________________</Text>
                        </View>
                    ) : null
                )}
                stickySectionHeadersEnabled={false} 
                style={{zIndex:1, marginTop: 120}}
            />
        </SafeAreaView>
    );
};

export default Search;