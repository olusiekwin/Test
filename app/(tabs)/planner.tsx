import { Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Search, Filter, Apple, AlertCircle, Pizza } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { plannerStyles } from "@/styles/planner.styles";

export default function FoodPlannerScreen() {
  const router = useRouter();
  
  const handleRecipePress = () => {
    router.push('/recipe-details');
  };
  
  return (
    <View style={plannerStyles.container}>
      <View style={plannerStyles.header}>
        <Text style={plannerStyles.headerTitle}>Food Planner</Text>
        <TouchableOpacity>
          <Text style={plannerStyles.favoritesLink}>Favorites</Text>
        </TouchableOpacity>
      </View>
      
      {/* Search Bar */}
      <View style={plannerStyles.searchContainer}>
        <View style={plannerStyles.searchBar}>
          <Search size={20} color="#202026" style={plannerStyles.searchIcon} />
          <TextInput
            style={plannerStyles.searchInput}
            placeholder="Search recipes"
            placeholderTextColor="#B3B3B3"
          />
          <TouchableOpacity style={plannerStyles.filterButton}>
            <Filter size={24} color="#202026" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Preference Cards */}
      <View style={plannerStyles.preferencesContainer}>
        <TouchableOpacity style={plannerStyles.preferenceCard}>
          <View style={[plannerStyles.iconCircle, plannerStyles.orangeCircle]}>
            <Apple size={20} color="#FFFFFF" />
          </View>
          <Text style={plannerStyles.preferenceText}>Food{'\n'}Preferences</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={plannerStyles.preferenceCard}>
          <View style={[plannerStyles.iconCircle, plannerStyles.orangeCircle]}>
            <AlertCircle size={20} color="#FFFFFF" />
          </View>
          <Text style={plannerStyles.preferenceText}>Food{'\n'}Restrictions</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={plannerStyles.preferenceCard}>
          <View style={[plannerStyles.iconCircle, plannerStyles.orangeCircle]}>
            <Pizza size={20} color="#FFFFFF" />
          </View>
          <Text style={plannerStyles.preferenceText}>Favorite{'\n'}Cuisines</Text>
        </TouchableOpacity>
      </View>
      
      {/* Meal Plans Section */}
      <View style={plannerStyles.mealPlansSection}>
        <Text style={plannerStyles.sectionTitle}>Meal Plans</Text>
        
        {/* Date Navigation */}
        <View style={plannerStyles.dateNavigation}>
          <TouchableOpacity style={plannerStyles.dateNavButton}>
            <Text style={plannerStyles.chevronLeft}>‹</Text>
          </TouchableOpacity>
          
          <Text style={plannerStyles.dateRange}>March 24-30</Text>
          
          <TouchableOpacity style={plannerStyles.dateNavButton}>
            <Text style={plannerStyles.chevronRight}>›</Text>
          </TouchableOpacity>
        </View>
        
        {/* Days of Week */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={plannerStyles.daysContainer}
        >
          {days.map((day, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                plannerStyles.dayCard, 
                index === 0 && plannerStyles.activeDayCard
              ]}
            >
              <Text 
                style={[
                  plannerStyles.dayName, 
                  index === 0 && plannerStyles.activeDayText
                ]}
              >
                {day.name}
              </Text>
              <Text 
                style={[
                  index === 0 ? plannerStyles.activeDayNumber : plannerStyles.dayNumber
                ]}
              >
                {day.number}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Meal Type Selector */}
        <View style={plannerStyles.mealTypeContainer}>
          <TouchableOpacity style={plannerStyles.mealTypeButton}>
            <Text style={plannerStyles.mealTypeText}>Breakfast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={plannerStyles.mealTypeButtonInactive}>
            <Text style={plannerStyles.mealTypeTextInactive}>Lunch</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={plannerStyles.mealTypeButtonInactive}>
            <Text style={plannerStyles.mealTypeTextInactive}>Snack</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={plannerStyles.mealTypeButtonInactive}>
            <Text style={plannerStyles.mealTypeTextInactive}>Dinner</Text>
          </TouchableOpacity>
        </View>
        
        {/* Meal Card */}
        <View style={plannerStyles.mealCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }} 
            style={plannerStyles.mealImage} 
          />
          
          <Text style={plannerStyles.mealTitle}>Fruits & Caramel Syrup Pancakes</Text>
          
          <View style={plannerStyles.nutritionContainer}>
            <View style={plannerStyles.nutritionItem}>
              <View style={[plannerStyles.nutritionDot, { backgroundColor: '#FF5353' }]} />
              <Text style={plannerStyles.nutritionLabel}>Protein</Text>
              <Text style={plannerStyles.nutritionValue}>25</Text>
            </View>
            
            <View style={plannerStyles.nutritionItem}>
              <View style={[plannerStyles.nutritionDot, { backgroundColor: '#6C6799' }]} />
              <Text style={plannerStyles.nutritionLabel}>Fat</Text>
              <Text style={plannerStyles.nutritionValue}>25</Text>
            </View>
            
            <View style={plannerStyles.nutritionItem}>
              <View style={[plannerStyles.nutritionDot, { backgroundColor: '#FFE521' }]} />
              <Text style={plannerStyles.nutritionLabel}>Carbs</Text>
              <Text style={plannerStyles.nutritionValue}>25</Text>
            </View>
            
            <TouchableOpacity 
              style={plannerStyles.recipeButton}
              onPress={handleRecipePress}
            >
              <Text style={plannerStyles.recipeButtonText}>Recipe</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const days = [
  { name: 'Mon', number: '24' },
  { name: 'Tue', number: '25' },
  { name: 'Wed', number: '26' },
  { name: 'Thu', number: '27' },
  { name: 'Fri', number: '28' },
  { name: 'Sat', number: '29' },
  { name: 'Sun', number: '30' },
];