"use client";

import { Brief } from "@/types";
import { useRef, useState } from "react";
import { useMinRows } from "@/hooks";

import TextareaAutosize from "react-textarea-autosize";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

import "./BriefForm.css";
import { useParams } from "next/navigation";

export default function BriefForm({ lang }: any) {
  const companyNameRef = useRef<any>(null);
  const workPlaceRef = useRef<any>(null);
  const socialLinksRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const itProductRef = useRef<any>(null);
  const businessGoalsRef = useRef<any>(null);
  const businessProblemsRef = useRef<any>(null);
  const usersRef = useRef<any>(null);
  const usersActionsRef = useRef<any>(null);
  const keyWordsRef = useRef<any>(null);
  const additionalFeaturesRef = useRef<any>(null);
  const websiteDesignRef = useRef<any>(null);
  const designsExamplesRef = useRef<any>(null);
  const styleRef = useRef<any>(null);
  const thirdPartyLibrariesRef = useRef<any>(null);
  const cybersecurityRef = useRef<any>(null);
  const budgetRef = useRef<any>(null);
  const projectDeadlineRef = useRef<any>(null);
  const favoritesProjectsRef = useRef<any>(null);
  const hatedProjectsRef = useRef<any>(null);
  const requirementsRef = useRef<any>(null);
  const projectSupportRef = useRef<any>(null);
  const officialContactRef = useRef<any>(null);
  const contactOptionsRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);

  const minRows = useMinRows();
  const params = useParams();

  async function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const newBrief: Brief = {
      company_name: companyNameRef.current?.value,
      sphere: workPlaceRef.current?.value,
      email: emailRef.current?.value,
      website_link: socialLinksRef.current?.value,
      project_goals: [
        {
          question: lang.it_product,
          answer: itProductRef.current?.value,
        },
        {
          question: lang.business_goals,
          answer: businessGoalsRef.current?.value,
        },
        {
          question: lang.problems,
          answer: businessProblemsRef.current?.value,
        },
      ],
      users: [
        {
          question: lang.potential_users,
          answer: usersRef.current?.value,
        },
        {
          question: lang.main_actions,
          answer: usersActionsRef.current?.value,
        },
      ],
      functional_requirements: [
        {
          question: lang.features,
          answer: keyWordsRef.current?.value,
        },
        {
          question: lang.additional_features,
          answer: additionalFeaturesRef.current?.value,
        },
      ],
      design_style: [
        {
          question: lang.style,
          answer: websiteDesignRef.current?.value,
        },
        {
          question: lang.design_examples,
          answer: designsExamplesRef.current?.value,
        },
        {
          question: lang.your_style,
          answer: styleRef.current?.value,
        },
      ],
      technical_requirements: [
        {
          question: lang.services,
          answer: thirdPartyLibrariesRef.current?.value,
        },
        {
          question: lang.security,
          answer: cybersecurityRef.current?.value,
        },
      ],
      budget: [
        {
          question: lang.your_budget,
          answer: budgetRef.current?.value,
        },
        {
          question: lang.deadline,
          answer: projectDeadlineRef.current?.value,
        },
      ],
      liked_disliked: [
        {
          question: lang.your_favorites,
          answer: favoritesProjectsRef.current?.value,
        },
        {
          question: lang.not_favorites,
          answer: hatedProjectsRef.current?.value,
        },
      ],
      additional_questions: [
        {
          question: lang.questions,
          answer: requirementsRef.current?.value,
        },
        {
          question: lang.support,
          answer: projectSupportRef.current?.value,
        },
      ],
      contacts: [
        {
          question: lang.contact_face,
          answer: officialContactRef.current?.value,
        },
        {
          question: lang.contact_style,
          answer: contactOptionsRef.current?.value,
        },
      ],
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/submit/brief`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(newBrief),
        }
      );

      const jsonData = await response.json();
      console.log(jsonData);

      if (response.status == 200) {
        successToast();
        setLoading(false);
      } else if (response.status == 400) {
        setLoading(false);
        errorToast();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const successToast = () => toast.success("Successfully created!");
  const errorToast = () => toast.error("Fill all fields");

  return (
    <section className="mt-[100px] mx-[30px] brief__form">
      <div className="wrapper">
        <form>
          <div className="relative">
            <TextareaAutosize
              id="company-name"
              className="custom-textarea resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              ref={companyNameRef}
            />
            <label
              htmlFor="company-name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              {lang.company_name}
            </label>
          </div>
          <div className="relative mt-[32px]">
            <TextareaAutosize
              id="work-place"
              className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              ref={workPlaceRef}
            />
            <label
              htmlFor="work-place"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              {lang.field}
            </label>
          </div>
          <div className="relative mt-[32px]">
            <TextareaAutosize
              id="social-links"
              className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              ref={socialLinksRef}
            />
            <label
              htmlFor="social-links"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              {lang.links}
            </label>
          </div>
          <div className="relative mt-[32px]">
            <TextareaAutosize
              id="email"
              className="block rounded-[8px] bg-[#121212] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              ref={emailRef}
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              E-Mail
            </label>
          </div>
          {/* Goals */}
          <section className="mt-[50px]">
            <h4 className="text-[28px] form-title">{lang.goals}</h4>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                id="it-product"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={itProductRef}
              />
              <label
                htmlFor="it-product"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.it_product}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="business-goals"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={businessGoalsRef}
              />
              <label
                htmlFor="business-goals"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.business_goals}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="business-problems"
                className="resize-y bg-[#121212] line-clamp-1 block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={businessProblemsRef}
              />
              <label
                htmlFor="business-problems"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.problems}
              </label>
            </div>
          </section>
          <section className="mt-[50px]">
            <h4 className="text-[28px] form-title">{lang.users}</h4>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="users"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={usersRef}
              />
              <label
                htmlFor="users"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.potential_users}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="users-actions"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={usersActionsRef}
              />
              <label
                htmlFor="users-actions"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.main_actions}
              </label>
            </div>
          </section>
          {/* Дизайн и стиль */}
          <section className="mt-[50px]">
            <h4 className="text-[28px] form-title">{lang.requirements}</h4>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="key-words"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={keyWordsRef}
              />
              <label
                htmlFor="key-words"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.features}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="additional-features"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={additionalFeaturesRef}
              />
              <label
                htmlFor="additional-features"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.additional_features}
              </label>
            </div>
          </section>
          <section className="mt-[50px]">
            <h4 className="text-[28px] form-title">{lang.design}</h4>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="website-design"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={websiteDesignRef}
              />
              <label
                htmlFor="website-design"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.style}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="designs-examples"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={designsExamplesRef}
              />
              <label
                htmlFor="designs-examples"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.design_examples}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="style"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={styleRef}
              />
              <label
                htmlFor="style"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.your_style}
              </label>
            </div>
          </section>
          <section className="mt-[50px]">
            <h4 className="text-[28px] form-title">
              {lang.technical_requirements}
            </h4>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="third-party-libraries"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={thirdPartyLibrariesRef}
              />
              <label
                htmlFor="third-party-libraries"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.services}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="cybersecurity"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={cybersecurityRef}
              />
              <label
                htmlFor="cybersecurity"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.security}
              </label>
            </div>
          </section>
          <section className="mt-[50px]">
            <h4 className="text-[28px] form-title">{lang.budget}</h4>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="budget"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={budgetRef}
              />
              <label
                htmlFor="budget"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.your_budget}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="project-deadline"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={projectDeadlineRef}
              />
              <label
                htmlFor="project-deadline"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.deadline}
              </label>
            </div>
          </section>
          <section className="mt-[50px]">
            <h4 className="text-[28px] form-title">{lang.favorites_title}</h4>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="favorites-projects"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={favoritesProjectsRef}
              />
              <label
                htmlFor="favorites-projects"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.your_favorites}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="hated-projects"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={hatedProjectsRef}
              />
              <label
                htmlFor="hated-projects"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.not_favorites}
              </label>
            </div>
          </section>
          <section className="mt-[50px]">
            <h4 className="text-[28px] form-title">
              {lang.additional_questions}
            </h4>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="requirements"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={requirementsRef}
              />
              <label
                htmlFor="requirements"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.questions}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="project-support"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={projectSupportRef}
              />
              <label
                htmlFor="project-support"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.support}
              </label>
            </div>
          </section>
          <section className="mt-[50px]">
            <h4 className="text-[28px] form-title">{lang.contact_info}</h4>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="official-contact"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={officialContactRef}
              />
              <label
                htmlFor="official-contact"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.contact_face}
              </label>
            </div>
            <div className="relative mt-[32px]">
              <TextareaAutosize
                minRows={minRows}
                id="contact-options"
                className="resize-y bg-[#121212] block rounded-[8px] pl-2.5 pt-5 pb-2.5 w-full text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={contactOptionsRef}
              />
              <label
                htmlFor="contact-options"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {lang.contact_style}
              </label>
            </div>
          </section>
          <div className="flex justify-center items-center mt-[100px] mb-[50px]">
            <button
              onClick={handleSubmitForm}
              className={`submit__btn-form relative z-[1001] h-[70px] w-[449px] max-w-full flex items-center justify-center rounded-[10px] border-[0.5px] border-white ${
                loading == false && "duration-500"
              }`}
            >
              {loading == false ? (
                lang.button
              ) : (
                <ThreeDots
                  visible={true}
                  height="60"
                  width="60"
                  color="#fff"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              )}
            </button>
          </div>
        </form>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </section>
  );
}
