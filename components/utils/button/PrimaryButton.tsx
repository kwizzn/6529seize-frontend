import CircleLoader from "../../distribution-plan-tool/common/CircleLoader";

export default function PrimaryButton({
  loading,
  disabled,
  onClicked,
  children,
  padding = "tw-px-3.5 tw-py-2.5",
  title,
}: {
  readonly loading: boolean;
  readonly disabled: boolean;
  readonly onClicked: () => void;
  readonly children: React.ReactNode;
  readonly padding?: string;
  readonly title?: string;
}) {
  return (
    <div
      className={`${
        disabled || loading
          ? "tw-from-primary-400/50 tw-to-primary-500/50"
          : " tw-from-primary-400 tw-to-primary-500"
      } tw-p-[1px] tw-w-full sm:tw-w-auto tw-flex tw-rounded-lg tw-bg-gradient-to-b`}
    >
      <button
        onClick={onClicked}
        disabled={disabled || loading}
        type="button"
        title={title}
        className={`${
          disabled || loading
            ? "tw-opacity-30 tw-text-iron-300"
            : "tw-text-white desktop-hover:hover:tw-bg-primary-600 desktop-hover:hover:tw-border-primary-600"
        } tw-flex tw-w-full tw-gap-x-1.5 tw-items-center tw-justify-center tw-border tw-border-solid tw-border-primary-500 tw-rounded-lg tw-bg-primary-500 ${padding} tw-text-sm tw-font-semibold tw-shadow-sm focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-primary-600 tw-transition tw-duration-300 tw-ease-out`}
      >
        {loading && <CircleLoader />}
       {children}
      </button>
    </div>
  );
}
