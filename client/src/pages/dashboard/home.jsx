import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/components/cards";
import { StatisticsChart } from "@/components/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import { WelcomeCard } from "@/components/WelcomeCard";
import Carousel from "@/components/cards/Carousel";
import VegetableCard from "@/components/cards/VegetableCard";
import FruitsAndVegetables from "@/components/cards/FruitsAndVegetable";

export function Home() {
  return (
    <div className="mt-12">
       <Carousel />
       <VegetableCard/>
       <FruitsAndVegetables/>
      {/* <WelcomeCard /> */}
     
    </div>
  );
}

export default Home;
