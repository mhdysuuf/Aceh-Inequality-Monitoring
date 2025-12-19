import React from 'react';

export enum AppView {
  HOME = 'HOME',
  LANDING = 'LANDING',
  PERSONAL_ONBOARDING = 'PERSONAL_ONBOARDING',
  PERSONAL_RESULT = 'PERSONAL_RESULT',
  EXPERTISE_ONBOARDING = 'EXPERTISE_ONBOARDING',
  EXPERTISE_DASHBOARD = 'EXPERTISE_DASHBOARD'
}

export enum PersonalStep {
  LOCATION = 1,
  POSITION = 2,
  ISSUES = 3,
  TIME = 4,
  CONFIRMATION = 5
}

export interface PersonalData {
  location: string;
  position: string;
  issues: string[];
  worry: string;
}

export interface ExpertiseData {
  identity: string;
  needs: string;
  regionFocus: string;
}

export interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}