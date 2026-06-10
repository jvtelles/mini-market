import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import {styles } from "./styles"

import { FilterStatus } from "@/types/FilterStatus";


type Props = TouchableOpacityProps & {

status:FilterStatus
isActive: boolean
}

