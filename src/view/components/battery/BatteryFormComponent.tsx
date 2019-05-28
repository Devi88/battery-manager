import {Component, default as React} from "react";
import {View} from "react-native";
import {addBatteryRequestAction} from "../../../redux/actions/battery/BatteryActions";
import {connect} from "react-redux";
import {Form, Formik} from "formik";
import {TextField} from "react-native-material-textfield";
import {withNextInputAutoFocusForm} from "react-native-formik";
import {styles} from "../../styles/styles";
import {Button} from "react-native-material-ui";
import NavigationService from "../../../navigation/NavigationService";
import {BatteryFormData} from "../../../lib/utils";

interface Props {
    addBattery: (data: BatteryFormData) => void
}

class BatteryFormComponent extends Component<Props> {
    render() {
        const {addBattery} = this.props;
        const Form = withNextInputAutoFocusForm(View);

        return (
                <Formik
                    initialValues={{battery_name: ""}}
                    onSubmit={(values, actons) => {
                        addBattery({
                            name : values.battery_name
                        });
                        NavigationService.navigate('BatteryList', {})
                    }}>
                    {({handleChange, handleSubmit, values}) => (
                        <Form style={styles.container_form}>
                            <TextField
                                onChangeText={handleChange('battery_name')}
                                value={values.battery_name}
                                label={"Nazwa baterii"}
                            />
                            <Button primary raised onPress={handleSubmit} text={"Dodaj"}/>
                        </Form>
                    )}
                </Formik>
        )
    }
}

const mapDispatchToProps = ({
    addBattery: addBatteryRequestAction
});


export default connect(null, mapDispatchToProps)(BatteryFormComponent);