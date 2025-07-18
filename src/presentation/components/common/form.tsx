import React from "react";
import { FormInstance, FormProps, Form as OriginalForm } from "antd";

export const Form: FormComponent = (props) => {
  const requiredMark =
    props.requiredMarkPosition === "left"
      ? props.requiredMark
      : (label: React.ReactNode, { required }: { required: boolean }) => (
          <>
            {label}
            {required && (
              <span style={{ color: "red", marginLeft: "3px" }}>*</span>
            )}
          </>
        );

  return <OriginalForm requiredMark={requiredMark} {...props} />;
};

Form.useForm = OriginalForm.useForm;
Form.Item = OriginalForm.Item;
Form.List = OriginalForm.List;
Form.Provider = OriginalForm.Provider;
Form.ErrorList = OriginalForm.ErrorList;

interface FormComponent extends React.FC<Props> {
  useForm: () => [FormInstance];
  Item: typeof OriginalForm.Item;
  List: typeof OriginalForm.List;
  Provider: typeof OriginalForm.Provider;
  ErrorList: typeof OriginalForm.ErrorList;
}

type Props = FormProps & {
  requiredMarkPosition?: "left" | "right";
  children?: React.ReactNode;
};
