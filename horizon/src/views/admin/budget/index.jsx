import React, { useState } from "react";

import PieGraph from "./components/PieGraph";
import BarGraph from "./components/BarGraph";
import { GiLargePaintBrush } from "react-icons/gi";
import { GiFloorPolisher } from "react-icons/gi";
import { GiStraightPipe } from "react-icons/gi";
import { GiWireCoil } from "react-icons/gi";

import { MdChair } from "react-icons/md";

import { MdBarChart, MdDashboard } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import TaskCard from "./components/TaskCard";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Textarea,
  } from "@chakra-ui/react";

const Budget = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeButton, setActiveButton] = useState("monthly");
  const [todoDetails, setTodoDetails] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    // Handle other logic based on the button type if needed
  };
  const handleTaskCardClick = (icon, title) => {
    setSelectedTask({ icon, title });
    onOpen();
  };
  const handleSaveExpense = () => {
    // Implement logic to save expense details and amount
    // For now, let's just log them to the console
    console.log("Expense Details:", todoDetails);
    console.log("Expense Amount:", expenseAmount);
    // You can add logic to update the subtitle of the TaskCard here
    // For example: updateSubtitle(`${previousSubtitle} + ${expenseAmount}`);
    onClose(); // Close the modal after saving
  };
  return (
    <div className="mt-10">
      <div>
        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-11">
          <div
            className="card card-border xl:col-span-7 2xl:col-span-8"
            role="presentation"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">Cost Tracking</h4>
              </div>
              <div className="chartRef">
                <div style={{ minHeight: "395px" }}>
                  <BarGraph />
                </div>
              </div>
            </div>
          </div>
          <div
            className="card card-border xl:col-span-4 2xl:col-span-3"
            role="presentation"
          >
            <div className="card-body">
              <h4 className="text-xl font-semibold">Budget Allocated</h4>

              <div className="mt-20 flex items-center justify-center">
                <div className="chartRef">
                  <div className=" mx-auto w-[250px]">
                    <PieGraph />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
        <button
          onClick={() =>
            handleTaskCardClick(
              <GiFloorPolisher className="h-7 w-7" />,
              "Flooring"
            )
          }
        >
          <TaskCard
            icon={<GiFloorPolisher className="h-7 w-7" />}
            title={"Flooring"}
            subtitle={"$340.5"}
          />
        </button>
        <button
          onClick={() =>
            handleTaskCardClick(
              <GiLargePaintBrush className="h-7 w-7" />,
              "Painting"
            )
          }
        >
          <TaskCard
            icon={<GiLargePaintBrush className="h-6 w-6" />}
            title={"Painting"}
            subtitle={"$642.39"}
          />
        </button>

        <button
          onClick={() =>
            handleTaskCardClick(
              <GiStraightPipe className="h-7 w-7" />,
              "Plumbing"
            )
          }
        >
          <TaskCard
            icon={<GiStraightPipe className="h-7 w-7" />}
            title={"Plumbing"}
            subtitle={"$574.34"}
          />
        </button>

        <button
          onClick={() =>
            handleTaskCardClick(<GiWireCoil className="h-7 w-7" />, "Wiring")
          }
        >
          <TaskCard
            icon={<GiWireCoil className="h-6 w-6" />}
            title={"Wiring"}
            subtitle={"$1,000"}
          />
        </button>

        <button
          onClick={() =>
            handleTaskCardClick(<MdChair className="h-7 w-7" />, "Furniture")
          }
        >
          <TaskCard
            icon={<MdChair className="h-7 w-7" />}
            title={"Furniture"}
            subtitle={"$145"}
          />
        </button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD EXPENSE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedTask && (
              <div className="flex items-center gap-5">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    {selectedTask.icon}
                  </span>
                </div>
                <h1 className="text-2xl font-bold">{selectedTask.title}</h1>
              </div>
            )}
            {/* Todo Details Input */}
            <Textarea
              placeholder="Enter details..."
              value={todoDetails}
              onChange={(e) => setTodoDetails(e.target.value)}
              mt={4}
            />
            {/* Expense Amount Input */}
            <Input
              type="number"
              placeholder="Enter amount..."
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              mt={4}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleSaveExpense}>
              SAVE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    </div>
  );
};

export default Budget;
{
    Flooring: [
      {
        details: "",
        cost: "",
      },
    ]
    Painting: [
      {
        details: "",
        cost: "",
      },
    ]
    Plumbing: [
      {
        details: "",
        cost: "",
      },
    ]
    Wiring: [
      {
        details: "",
        cost: "",
      },
    ]
    Furniture: [
      {
        details: "",
        cost: "",
      },
    ],
  }
  
