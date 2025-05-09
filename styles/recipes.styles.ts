import { StyleSheet } from "react-native";

export const recipesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#202026',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    marginBottom: 20,
    paddingLeft: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  activeCategoryButton: {
    backgroundColor: '#202026',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6A6A6A',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  recipesList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(124, 124, 124, 0.1)',
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  recipeContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202026',
    marginBottom: 4,
  },
  recipeDescription: {
    fontSize: 12,
    color: '#6A6A6A',
    marginBottom: 8,
  },
  recipeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    fontSize: 12,
    color: '#6A6A6A',
    marginLeft: 4,
  },
});