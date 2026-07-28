

[agent.chat.agent.md](https://github.com/user-attachments/files/30456975/agent.chat.agent.md)<Project>
	<!-- Load the correct workload depending on the TargetPlatformVersion -->
	<!-- Exact match: net10.0 targeting tvOS 26.0 -> import the net10.0_26.0 SDK -->
	<ImportGroup Condition=" '$(TargetPlatformIdentifier)' == 'tvOS' And '$(UsingAppleNETSdk)' != 'true' And $([MSBuild]::VersionEquals($(TargetFrameworkVersion), '10.0')) And '$(TargetPlatformVersion)' == '26.0'">
		<Import Project="Sdk.props" Sdk="Microsoft.tvOS.Sdk.net10.0_26.0" />
	</ImportGroup>

	<!-- Exact match: net9.0 targeting tvOS 18.0 -> import the net9.0_18.0 SDK -->
	<ImportGroup Condition=" '$(TargetPlatformIdentifier)' == 'tvOS' And '$(UsingAppleNETSdk)' != 'true' And $([MSBuild]::VersionEquals($(TargetFrameworkVersion), '9.0')) And '$(TargetPlatformVersion)' == '18.0'">
		<Import Project="Sdk.props" Sdk="Microsoft.tvOS.Sdk.net9.0_18.0" />
	</ImportGroup>

	<!-- Exact match: net9.0 targeting tvOS 26.0 -> import the net9.0_26.0 SDK -->
	<ImportGroup Condition=" '$(TargetPlatformIdentifier)' == 'tvOS' And '$(UsingAppleNETSdk)' != 'true' And $([MSBuild]::VersionEquals($(TargetFrameworkVersion), '9.0')) And '$(TargetPlatformVersion)' == '26.0'">
		<Import Project="Sdk.props" Sdk="Microsoft.tvOS.Sdk.net9.0_26.0" />
	</ImportGroup>

	<!-- If no TargetPlatformVersion is specified, load a default workload depending on the target framework version, and that workload will validate the TargetPlatformVersion value and show an error if applicable -->
	<!-- Default fallback for net10.0 with no TargetPlatformVersion specified -> import the net10.0_26.0 SDK -->
	<ImportGroup Condition=" '$(TargetPlatformIdentifier)' == 'tvOS' And '$(UsingAppleNETSdk)' != 'true' And $([MSBuild]::VersionEquals($(TargetFrameworkVersion), '10.0'))">
		<Import Project="Sdk.props" Sdk="Microsoft.tvOS.Sdk.net10.0_26.0" />
	</ImportGroup>

	<!-- Default fallback for net9.0 with no TargetPlatformVersion specified -> import the net9.0_26.0 SDK -->
	<ImportGroup Condition=" '$(TargetPlatformIdentifier)' == 'tvOS' And '$(UsingAppleNETSdk)' != 'true' And $([MSBuild]::VersionEquals($(TargetFrameworkVersion), '9.0'))">
		<Import Project="Sdk.props" Sdk="Microsoft.tvOS.Sdk.net9.0_26.0" />
	</ImportGroup>

	<!-- Detect if the target framework version is outside our supported range, and show the corresponding error -->
	<!-- Catch-all for any other TargetFrameworkVersion: imports the EOL SDK error for versions below 9.0, or the current SDK's future-version error for versions above 10.0 -->
	<ImportGroup Condition=" '$(TargetPlatformIdentifier)' == 'tvOS' And '$(UsingAppleNETSdk)' != 'true'">
		<Import Project="Sdk-eol.props" Sdk="Microsoft.tvOS.Sdk.net10.0_26.0" Condition=" $([MSBuild]::VersionLessThan($(TargetFrameworkVersion), '9.0'))" />
		<Import Project="Sdk.props" Sdk="Microsoft.tvOS.Sdk.net10.0_26.0" Condition=" $([MSBuild]::VersionGreaterThan($(TargetFrameworkVersion), '10.0'))" />
	</ImportGroup>

	<!-- Register "tvos" as a supported SDK target platform identifier for .NETCoreApp TFMs 6.0 and above -->
	<ItemGroup Condition=" '$(TargetFrameworkIdentifier)' == '.NETCoreApp' and $([MSBuild]::VersionGreaterThanOrEquals($(TargetFrameworkVersion), '6.0')) ">
		<SdkSupportedTargetPlatformIdentifier Include="tvos" DisplayName="tvOS" />
	</ItemGroup>
</Project>

