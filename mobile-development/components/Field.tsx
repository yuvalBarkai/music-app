import { Control, Controller, FieldValues, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { TextInput } from "react-native";
import styles from "../styles";

interface FieldProps {
   control: Control<any>;
   handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
   onSubmit: SubmitHandler<any>;
   isWrong: boolean;
}

export default function Field(props: FieldProps) {
   return (
      <Controller
         control={props.control}
         rules={{
            required: true,
         }}
         render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
               style={[styles.guess, props.isWrong && styles.wrong]}
               autoFocus={true}
               onBlur={onBlur}
               onChangeText={onChange}
               value={value}
               onSubmitEditing={props.handleSubmit(props.onSubmit)}
            />
         )}
         name="answer"
      />
   );
}