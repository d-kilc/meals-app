import Meal from "./meal"

export type RootStackParamList = {
  Categories: undefined
  MealsOverview: { categoryId: string },
  MealDetail: { meal: Meal }
} 