import {
  Button,
  Drawer,
  Radio,
  TextInput,
  Textarea,
  Tooltip,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { apiProvider } from "../../../../network/apiProvider";
import { IconPlus } from "@tabler/icons-react";
import { showNotification } from "@mantine/notifications";

function CreateQuestion({ value }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      question: "",
      options: [],
    },

    validate: {
      question: (value) => (value.length > 5 ? null : "enter question"),
    },
    validateInputOnChange: true,
  });
  const initialOptions = [
    { value: "", isCorrect: false },
    { value: "", isCorrect: false },
    { value: "", isCorrect: false },
    { value: "", isCorrect: false },
  ];
  const [options, setOptions] = useState(initialOptions);

  const handleOptionChange = (index: number, event: any) => {
    const updatedOptions = [...options];
    updatedOptions[index].value = event.target.value;
    setOptions(updatedOptions);
  };

  const handleCorrectAnswerChange = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions.forEach((option, i) => (option.isCorrect = i === index));
    setOptions(updatedOptions);
  };

  const handleSubmit = async () => {
    if (!options.some((v) => v.isCorrect)) {
      showNotification({
        color: "red",
        title: "Error",
        message: "option cant be empty",
      });
    } else {
      const formattedOptions = options.map((option) => ({
        option: option.value,
        isCorrect: option.isCorrect,
      }));
      const formData = {
        subjectId: value.id,
        question: form.values.question,
        options: formattedOptions,
      };

      try {
        const result = await apiProvider.createQuestion(formData);
        if (result != null) {
          close();
          form.reset();
          setOptions(initialOptions);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  <form
    onSubmit={form.onSubmit(handleSubmit)}
    className="mt-10 flex flex-col space-y-9 align-middle"
  >
    <TextInput
      description="Question"
      placeholder="Enter Question"
      title="Enter Question"
      variant="filled"
      {...form.getInputProps("question")}
    />

    {options.map((option, index) => (
      <div key={index} className="flex space-x-4">
        <Radio
          className="mt-2"
          variant="outline"
          value={option.value}
          checked={option.isCorrect}
          onChange={() => handleCorrectAnswerChange(index)}
        />
        <TextInput
          className="w-full"
          variant="filled"
          placeholder={`Enter Option ${index + 1}`}
          name={`option${index + 1}`}
          value={option.value}
          onChange={(e) => handleOptionChange(index, e)}
        />
      </div>
    ))}

    <Button type="submit" className="w-full bg-teal-700">
      Add Question
    </Button>
  </form>;
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={<div className="text-lg font-bold">Add Question</div>}
        position="right"
        size={"md"}
        offset={16}
        radius="md"
      >
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="mt-10 flex flex-col space-y-9 align-middle"
        >
          <Textarea
            radius="lg"
            variant="filled"
            label="Question"
            withAsterisk
            placeholder="Enter Question"
            autosize
            minRows={2}
            maxRows={4}
            {...form.getInputProps("question")}
          />
          {options.map((option, index) => (
            <div key={index} className="flex space-x-4">
              <Radio
                className="mt-2"
                variant="outline"
                value={option.value}
                checked={option.isCorrect}
                onChange={() => handleCorrectAnswerChange(index)}
              />
              <TextInput
                required
                className="w-full"
                variant="filled"
                placeholder={`Enter Option ${index + 1}`}
                name={`option${index + 1}`}
                value={option.value}
                onChange={(e) => handleOptionChange(index, e)}
              />
            </div>
          ))}

          <Button type="submit" className="w-full bg-teal-700" color="teal">
            Add Question
          </Button>
        </form>
      </Drawer>
      <Tooltip label={"Add Question"}>
        <Button onClick={open} color="gray" variant="outline">
          <IconPlus />
        </Button>
      </Tooltip>
    </>
  );
}

export default CreateQuestion;
