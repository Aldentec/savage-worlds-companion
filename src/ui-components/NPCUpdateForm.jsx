/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getNPC } from "../graphql/queries";
import { updateNPC } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function NPCUpdateForm(props) {
  const {
    id: idProp,
    nPC: nPCModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    race: "",
    attributes: "",
    skills: "",
    money: "",
    personalityTraits: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [race, setRace] = React.useState(initialValues.race);
  const [attributes, setAttributes] = React.useState(initialValues.attributes);
  const [skills, setSkills] = React.useState(initialValues.skills);
  const [money, setMoney] = React.useState(initialValues.money);
  const [personalityTraits, setPersonalityTraits] = React.useState(
    initialValues.personalityTraits
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = nPCRecord
      ? { ...initialValues, ...nPCRecord }
      : initialValues;
    setName(cleanValues.name);
    setRace(cleanValues.race);
    setAttributes(
      typeof cleanValues.attributes === "string" ||
        cleanValues.attributes === null
        ? cleanValues.attributes
        : JSON.stringify(cleanValues.attributes)
    );
    setSkills(
      typeof cleanValues.skills === "string" || cleanValues.skills === null
        ? cleanValues.skills
        : JSON.stringify(cleanValues.skills)
    );
    setMoney(cleanValues.money);
    setPersonalityTraits(cleanValues.personalityTraits ?? []);
    setCurrentPersonalityTraitsValue("");
    setErrors({});
  };
  const [nPCRecord, setNPCRecord] = React.useState(nPCModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNPC.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNPC
        : nPCModelProp;
      setNPCRecord(record);
    };
    queryData();
  }, [idProp, nPCModelProp]);
  React.useEffect(resetStateValues, [nPCRecord]);
  const [currentPersonalityTraitsValue, setCurrentPersonalityTraitsValue] =
    React.useState("");
  const personalityTraitsRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    race: [],
    attributes: [{ type: "JSON" }],
    skills: [{ type: "JSON" }],
    money: [],
    personalityTraits: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          race: race ?? null,
          attributes: attributes ?? null,
          skills: skills ?? null,
          money: money ?? null,
          personalityTraits: personalityTraits ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateNPC.replaceAll("__typename", ""),
            variables: {
              input: {
                id: nPCRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NPCUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              race,
              attributes,
              skills,
              money,
              personalityTraits,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Race"
        isRequired={false}
        isReadOnly={false}
        value={race}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              race: value,
              attributes,
              skills,
              money,
              personalityTraits,
            };
            const result = onChange(modelFields);
            value = result?.race ?? value;
          }
          if (errors.race?.hasError) {
            runValidationTasks("race", value);
          }
          setRace(value);
        }}
        onBlur={() => runValidationTasks("race", race)}
        errorMessage={errors.race?.errorMessage}
        hasError={errors.race?.hasError}
        {...getOverrideProps(overrides, "race")}
      ></TextField>
      <TextAreaField
        label="Attributes"
        isRequired={false}
        isReadOnly={false}
        value={attributes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              race,
              attributes: value,
              skills,
              money,
              personalityTraits,
            };
            const result = onChange(modelFields);
            value = result?.attributes ?? value;
          }
          if (errors.attributes?.hasError) {
            runValidationTasks("attributes", value);
          }
          setAttributes(value);
        }}
        onBlur={() => runValidationTasks("attributes", attributes)}
        errorMessage={errors.attributes?.errorMessage}
        hasError={errors.attributes?.hasError}
        {...getOverrideProps(overrides, "attributes")}
      ></TextAreaField>
      <TextAreaField
        label="Skills"
        isRequired={false}
        isReadOnly={false}
        value={skills}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              race,
              attributes,
              skills: value,
              money,
              personalityTraits,
            };
            const result = onChange(modelFields);
            value = result?.skills ?? value;
          }
          if (errors.skills?.hasError) {
            runValidationTasks("skills", value);
          }
          setSkills(value);
        }}
        onBlur={() => runValidationTasks("skills", skills)}
        errorMessage={errors.skills?.errorMessage}
        hasError={errors.skills?.hasError}
        {...getOverrideProps(overrides, "skills")}
      ></TextAreaField>
      <TextField
        label="Money"
        isRequired={false}
        isReadOnly={false}
        value={money}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              race,
              attributes,
              skills,
              money: value,
              personalityTraits,
            };
            const result = onChange(modelFields);
            value = result?.money ?? value;
          }
          if (errors.money?.hasError) {
            runValidationTasks("money", value);
          }
          setMoney(value);
        }}
        onBlur={() => runValidationTasks("money", money)}
        errorMessage={errors.money?.errorMessage}
        hasError={errors.money?.hasError}
        {...getOverrideProps(overrides, "money")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              race,
              attributes,
              skills,
              money,
              personalityTraits: values,
            };
            const result = onChange(modelFields);
            values = result?.personalityTraits ?? values;
          }
          setPersonalityTraits(values);
          setCurrentPersonalityTraitsValue("");
        }}
        currentFieldValue={currentPersonalityTraitsValue}
        label={"Personality traits"}
        items={personalityTraits}
        hasError={errors?.personalityTraits?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "personalityTraits",
            currentPersonalityTraitsValue
          )
        }
        errorMessage={errors?.personalityTraits?.errorMessage}
        setFieldValue={setCurrentPersonalityTraitsValue}
        inputFieldRef={personalityTraitsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Personality traits"
          isRequired={false}
          isReadOnly={false}
          value={currentPersonalityTraitsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.personalityTraits?.hasError) {
              runValidationTasks("personalityTraits", value);
            }
            setCurrentPersonalityTraitsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "personalityTraits",
              currentPersonalityTraitsValue
            )
          }
          errorMessage={errors.personalityTraits?.errorMessage}
          hasError={errors.personalityTraits?.hasError}
          ref={personalityTraitsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "personalityTraits")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || nPCModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || nPCModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
