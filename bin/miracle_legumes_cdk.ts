#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MiracleLegumesCdkStack } from '../lib/miracle_legumes_cdk-stack';

const app = new cdk.App();
new MiracleLegumesCdkStack(app, 'MiracleLegumesCdkStack');
